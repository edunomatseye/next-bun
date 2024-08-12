import { serve } from "bun";
import { hostname } from "os";

const server = Bun.serve({
  port: 4500,
  hostname: "localhost",
  fetch(request: Request) {
    return new Response("Hollup!");
  },
});
