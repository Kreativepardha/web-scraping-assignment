import * as cheerio from 'cheerio'

export function parseBasic(html: string, url: string) {
  const $ = cheerio.load(html)
  return {
    companyName: $('title').text().trim() || null,
    website: url,
    email: $('a[href^="mailto"]').attr('href')?.replace('mailto:', null),
    phone: $('a[href^="tel"]').attr('href')?.replace('tel:', null),
  }
}

export function parseMedium(html: string) {
  const $ = cheerio.load(html)
  const social: string[] = []
  $('a[href*="linkedin"], a[href*="twitter"]').each((_, el) => {
    social.push($(el).attr('href')!)
  })
  const address = $('address').text().trim() || null
  const products = $('[class*=product],[id*=service]').text().trim() || null
  return { social, address, products }
}

export function parseAdvanced(html: string) {
  const $ = cheerio.load(html)
  const text = $('body').text()
  const projects = (text.match(/project[s]?\s+:\s+[\w\s,]+/i) || [])[0] || null
  const competitors: string[] = []
  $('a:contains("competitor"), a:contains("alternative")').each((_, el) => {
    competitors.push($(el).text())
  })
  return { projects, competitors }
}
