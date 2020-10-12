import * as hapi from "hapi";
import settings from "./settings";
import * as routes from "./lib/routes";

const server: hapi.Server = new hapi.Server({
  host: settings.host,
  port: settings.port,
});

server.route(routes.default);

async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server running @ ${server.info.uri}`);
}

start();
