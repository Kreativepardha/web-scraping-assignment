import type { NextFunction, Request, Response } from "express";
import type { AnyZodObject } from "zod";



export const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (err: any) {
    return res.status(400).json({
      error: err.erorrs
    })
  }
}
