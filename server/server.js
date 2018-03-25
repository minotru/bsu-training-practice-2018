const http = require('http');
const fs = require('fs');

const port = 8080;
const staticPath = '../client/public';

function handler(req, res) {
  console.log(req.url);
  const url = req.url === '/' ? '/index.html' : req.url;
  // console.log(req);
  fs.readFile(staticPath + url, (err, data) => {
    if (err) {
      fs.readFile(staticPath + '/error.html', (err, data) => {
        if (err) {
          res.end(err.message);
        } else {
          res.end(data);
        }
      });
    } else {
      res.end(data);
    }
  });
}

const server = http.createServer(handler);
server.listen(port);