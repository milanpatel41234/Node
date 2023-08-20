const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("server");
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body>");
    res.write("/firstHTML.html");
    res.write(
      '<form action="/message" method="POST" ><input type="text" name="message" ><button type="submit">Sand</button></form>'
    );
    res.write("</body></html>");
    return res.end();
  } else if (req.url === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body><h1>Welcome to home Page</h1></body></html>");
    return res.end();
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body><h1>About Us Page</h1></body></html>");
    return res.end();
  }
  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedbody = Buffer.concat(body).toString();
      console.log(parsedbody);
      const msg = parsedbody.split("=")[1];
      fs.writeFileSync("message.txt", msg);
      res.statusCode = 302;
      res.setHeader("location", "/");
      return res.end();
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html><body><h1>Welcome to No Page</h1></body></html>");
  return res.end();
});
server.listen(3000);
