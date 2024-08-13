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
