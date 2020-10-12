import * as Hapi from "hapi";
import settings from "./settings";

const server: Hapi.Server = new Hapi.Server({
  host: settings.host,
  port: settings.port,
});

server.route({
  method: "GET",
  path: "/",
  handler: (request: Hapi.Request, h: Hapi.ResponseToolkit) =>
    "This is the GET route.",
});

server.route({
  method: "POST",
  path: "/",
  handler: (request: Hapi.Request, h: Hapi.ResponseToolkit) => {
    return {
      message:
        "This is the POST route, the data you sent is attached to this response",
      data: request.payload,
    };
  },
});

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
