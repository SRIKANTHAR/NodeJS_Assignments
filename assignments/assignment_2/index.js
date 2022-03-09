const fs = require("fs");

const http = require("http");

const html_content = `<h1> Hello World </h1>
<p> This is SRIKANTH </p>`;

fs.writeFile("index.html", html_content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File is created");
  }
});

const server = http
  .createServer((req, res) => {
    fs.readFile("index.html", (err, data) => {
      res.end(data);
    });
  })
  .listen(3000, console.log("Server is responding"));
