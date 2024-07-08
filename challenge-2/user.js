const people = require("./userInfo");
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to the user information page");
  }
  if (req.url === "/json") {
    const result = res.end(JSON.stringify(people));
    return result;
  }
});
server.listen(2000);
