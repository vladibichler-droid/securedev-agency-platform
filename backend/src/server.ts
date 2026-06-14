import app from "./app.js";
import { env } from "./config/env.js";

app.listen(env.port, () => {
  console.log(`SecureDev Agency Backend läuft auf http://localhost:${env.port}`);
});
