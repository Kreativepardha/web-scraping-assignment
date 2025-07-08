import { Router, type RequestHandler } from "express";
import { validate } from "../middlewares/validateRequest";
import { scrapeSchema } from "../validations/scrape.schema";
import { scrapeController } from "../controllers/scrape.controller";
import { asyncHandler } from "../middlewares/asynchHandler";



const router = Router();

router.post('/scrape', validate(scrapeSchema) , asyncHandler(scrapeController) )


export default router;
