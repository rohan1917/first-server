// server creation

const http = require("http");

const port = 8081;

const toDoList = ["Need to learn", "Need to code"];

// http method

// GET => getting certain details from server / default method/ n it can directly work on any browser
// PUT => Overwrite, fully update
// DELETE => Deleting data from server
// PATCH =>  Update Very few fileds / certain fileds
// POST =>Sending to the server

http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("<h4>Hello, gmail a new server</h4>");
    // res.end();
    const { method, url } = req;
    //   console.log(method, url);
    //   res.end();
    if (url === "/todos") {
      // http://localhost:8081/todos
      if (method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(toDoList.toString());
      } else if (method === "POST") {
        let body = "";
        req.on("error", (err) => {
          console.log(err);
        }).on('data', (chunk) => {
            // body = body +chunk;
            // console.log(chunk);
            body += chunk;
            
        }).on('end', () => {
            body = JSON.parse(body);
            console.log("body data ",body);
        });
      } else {
        res.writeHead(501);
      }
    } else {
      res.writeHead(404);
    }
    res.end();
  })
  .listen(port, () => {
    console.log(`My NodeJs server started on port ${port}`);
  });

// http://localhost:8081
// http://localhost:8081/
// http://localhost:8081/home
// http://localhost:8081/aboutUs
// http://localhost:8081/contactUs
