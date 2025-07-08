import { exec } from "child_process"
import { promisify } from "util"
import axios from "axios"


const execAsync = promisify(exec)

export async function discoverTechStack(url: string): Promise<string[]> {
  const domain = new URL(url).hostname
  const cmd = `subfinder -silent -d ${domain} | httpx -silent -tech-detect -json`

  try {
    const { stdout } = await execAsync(cmd)
    const lines = stdout.trim().split("\n")
    const techs = new Set<string>()

    lines.forEach(line => {
      const parsed = JSON.parse(line)
      if (parsed.technologies) {
        parsed.technologies.forEach((t: string) => techs.add(t))
      }
    })

    return [...techs]
  } catch {
    return []
  }
}


export async function getClearbitData(url: string) {
  const domain = new URL(url).hostname
  try {
    const res = await axios.get(`https://company.clearbit.com/v2/companies/find?domain=${domain}`, {
      headers: { Authorization: `Bearer ${process.env.CLEARBIT_API_KEY}` },
    })
    return res.data
  } catch {
    return {}
  }
}
