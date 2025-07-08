import type { NextFunction, Request, Response } from "express";
import logger from "../config/logger";




export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.stack)
  res.status(500).json({
    error: 'Internal Server Error'
  })
}
