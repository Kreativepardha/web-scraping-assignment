import type { Request, Response } from "express";
import { runScrapeTarget } from "../services/runScrape";



export const scrapeController = async (req: Request, res: Response): Promise<void> => {
    const { query, urls} = req.body;

    try {
        const results = await runScrapeTarget({query, urls});
        res.status(200).json({
            data: results
        })
    } catch (err) {
        res.status(500).json({
            error: "scraping failed",
            details: err
        })
    }

}