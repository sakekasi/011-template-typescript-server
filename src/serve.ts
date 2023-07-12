import express from "express";
import { z } from "zod";

export function makeServer(): express.Express {
  const app = express();
  app.use(express.json());

  const pingSchema = z.object({
    message: z.string().optional(),
  });
  app.get("/ping", async (req, res, next) => {
    try {
      const { message } = pingSchema.parse(req.query);
      res.send(message != null ? `pong ${message}` : "pong");
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).send(err.message);
      } else {
        next(err);
      }
    }
  });

  // on error, return 500
  app.use((err: any, req: any, res: any, next: any) => {
    console.error(err.stack);
    res.status(500).send(err.message);
  });

  return app;
}
