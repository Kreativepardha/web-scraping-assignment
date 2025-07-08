import * as cheerio from "cheerio"
import { exec } from "child_process"
import { promisify } from "util"

const execAsync = promisify(exec)

export async function extractMediumData(html: string) {
  const $ = cheerio.load(html)
  const social: string[] = []

  $('a[href*="linkedin"], a[href*="twitter"], a[href*="facebook"]').each((_, el) =>
    social.push($(el).attr("href")!)
  )

  const address = $("address").text().trim() || null
  const products = $('[class*=product], [id*=product]').text().trim() || null

  return {
    socialLinks: [...new Set(social)],
    address,
    products,
  }
}

// WHOIS + Domain Metadata
export async function getWhois(domain: string): Promise<string> {
  try {
    const { stdout } = await execAsync(`whois ${domain}`)
    return stdout
  } catch {
    return "N/A"
  }
}

// Subdomains (findomain)
export async function getSubdomains(domain: string): Promise<string[]> {
  try {
    const { stdout } = await execAsync(`findomain -t ${domain} -q`)
    return stdout.trim().split("\n")
  } catch {
    return []
  }
}
