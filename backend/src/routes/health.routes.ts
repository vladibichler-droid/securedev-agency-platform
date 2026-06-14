import { Router } from "express";

const router = Router();

router.get("/health", (_request, response) => {
  response.json({
    status: "ok",
    service: "SecureDev Agency Backend",
    version: "1.0.0"
  });
});

export default router;
