import axios from 'axios'
import logger from '../config/logger'

export async function checkReachable(url: string) {
  try {
    await axios.head(url, { timeout: 5000 })
  } catch {
    throw new Error(`URL not reachable: ${url}`)
  }
}

export async function fetchHtml(url: string): Promise<string> {
  const { data } = await axios.get(url, { timeout: 10000 })
  return data
}

// delayingggggggggggg
export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
