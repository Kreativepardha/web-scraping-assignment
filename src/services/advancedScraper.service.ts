import { discoverTechStack, getClearbitData } from "./techStack.services"

export async function extractAdvancedData(url: string) {
  const techStack = await discoverTechStack(url)
  const enrichment = await getClearbitData(url)

  return {
    techStack,
    enrichment,
  }
}
