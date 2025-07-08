import { fetchHtml } from "../utils/fetcher"
import * as cheerio from "cheerio"

export async function extractBasicData(url: string) {
  const html = await fetchHtml(url)
  const $ = cheerio.load(html)

  return {
    companyName: $("title").text().trim(),
    website: url,
    email: $('a[href^="mailto"]').attr("href")?.replace("mailto:", ""),
    phone: $('a[href^="tel"]').attr("href")?.replace("tel:", ""),
  }
}
