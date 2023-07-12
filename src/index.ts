import { config } from "./config.js";
import esMain from "es-main";
import { makeServer } from "./serve.js";

if (esMain(import.meta)) {
  main();
}

async function main() {
  const server = makeServer();
  server.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
  });
}
