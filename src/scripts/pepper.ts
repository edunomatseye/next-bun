import { serve } from "bun";
import { hostname } from "os";

const server = Bun.serve({
  port: 4500,
  hostname: "localhost",
  fetch(request: Request) {
    return new Response("Hollup!");
  },
});

const buf = new ArrayBuffer(8);
const dv = new DataView(buf);
dv.setUint8(0, 3);
dv.getUint8(0);

const readableStream = new ReadableStream({
  start(controller) {
    controller.enqueue("senorita");
    controller.enqueue("P square");
    controller.enqueue("Bebe lo");
    controller.close();
  },
});

async function processStream() {
  for await (const chunk of readableStream.toString()) {
    console.log(chunk);
  }
}

processStream();

Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Home page!");
    if (url.pathname === "/blog") return new Response("Blog!");
    return new Response("404!");
  },
});

Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Home page!");
    if (url.pathname === "/blog") return new Response("Blog!");
    return new Response("404!");
  },
});
