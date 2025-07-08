import { extractBasicData } from "./basicScraper.service"
import { extractMediumData, getWhois } from "./mediumScraper.service"
import { extractAdvancedData } from "./advancedScraper.service"
import { fetchHtml } from "../utils/fetcher"

export async function runScrapeTarget(url: string) {
  const html = await fetchHtml(url)

  const basic = await extractBasicData(url)
  const medium = await extractMediumData(html)
  const advanced = await extractAdvancedData(url)
  const whois = await getWhois(new URL(url).hostname)

  return {
    url,
    ...basic,
    ...medium,
    ...advanced,
    whois,
  }
}
