import handler from "../dist/server/server.js";

export const config = {
  runtime: "edge",
};

export default function (req, event) {
  return handler.fetch(req, process.env, event);
}
