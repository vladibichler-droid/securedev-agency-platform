import express from "express";
import healthRoutes from "./routes/health.routes.js";
import { securityMiddleware } from "./middleware/security.middleware.js";

const app = express();

app.use(securityMiddleware);
app.use(express.json());

app.get("/", (_request, response) => {
  response.json({
    message: "SecureDev Agency API läuft.",
    status: "online"
  });
});

app.use("/api", healthRoutes);

export default app;
