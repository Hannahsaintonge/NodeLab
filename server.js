// import { listenerCount } from "cluster";

"use strict";
const http = require("http");
const fact = require("./random");


http.createServer((request, response) => {
  response.writeHead(200, { "Content-type": "text/plain" });
  response.write(fact[Math.floor(Math.random()*fact.length)]);
  response.end();
}).listen(8080);
