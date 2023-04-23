require("dotenv").config();
const http = require("http-server/server");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

const PORT = process.env.PORT || 3500;
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  const extension = path.extname(req.url);
  let contentType;
  switch (extension) {
    case ".html":
      contentType = "text/html";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".jpeg":
      contentType = "image/jpeg";
      break;
    case ".svg":
      contentType = "image/svg+xml";
      break;
    case ".gif":
      contentType = "image/gif";
      break;
    case ".ico":
      contentType = "image/x-icon";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".woff":
      contentType = "application/font-woff";
      break;
    default:
      contentType = "text/plain";
  }
  let filePath =
    contentType === "text/html"
      ? path.join(__dirname, "views", "index.html")
      : contentType === "text/html" && req.url.slice(-1) === "/"
      ? path.join(__dirname, "views", req.url, "index.html")
      : contentType === "text/html"
      ? path.join(__dirname, "views", req.url)
      : path.join(__dirname, req.url);
});
server.listen(PORT, () => {
  console.log("Server is running on port" + PORT);
});
