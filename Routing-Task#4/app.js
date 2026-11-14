//Programmer: Aseel Monther
//This program creates a web server, it handles HTTP requests and allows users to navigate between
//the home, about and contact. 
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => 
{
  let fileName;
  if(req.url === "/")
  {
    fileName = "page.html";
  }
  else if(req.url === "/about")
    {
      fileName = "about.html";
    }
  else if(req.url === "/contact")
    {
      fileName = "contact.html";
    }
  else if(req.url === "/css/style.css")
  {
      fileName = "css/style.css";
  }
  else if(req.url === "/images/book.jpg")
  {
    fileName = "images/book.jpg";
  }
  else
  {
    res.writeHead(404, {"content-type": "text/plain"});
    return;
  }
  const filePath = path.join(__dirname, "templates", fileName);
  fs.readFile(filePath, (err, data) => 
  {
    if(err)
    {
      res.writeHead(500, {"content-type": "text/plain"});
      res.end("Server Error");
      return;
    }
    let contentType = "text/html";
    if (fileName.endsWith(".css"))
      {
        contentType = "text/css";
      }
      else if (fileName.endsWith(".jpg"))
        {
          contentType = "image/jpeg";
        }
        res.writeHead(200, {"content-type": contentType});
        res.end(data);
      });
    });
    server.listen(3000, () => 
      {
        console.log("Server running at http://localhost:3000");
      });