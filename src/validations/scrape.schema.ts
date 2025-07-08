import { z } from 'zod'

export const scrapeSchema = z.object({
  body: z.object({
    query: z.string().optional(),
    urls: z.array(z.string().url()).optional(),
  }).refine(data => data.query || data.urls?.length, {
    message: 'Either Query or Urls must be provided'
  })
})
