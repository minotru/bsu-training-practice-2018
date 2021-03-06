const http = require('http');
const fs = require('fs');

const PORT = 8080;
const staticPath = `${__dirname}/client/public`;

function handler(req, res) {
  const url = req.url === '/' ? '/index.html' : req.url;
  fs.readFile(staticPath + url, (err, data) => {
    if (err) {
      fs.readFile(`${staticPath}/error.html`, (err1, data1) => {
        if (err1) {
          res.end(err1.message);
        } else {
          res.end(data1);
        }
      });
    } else {
      res.end(data);
    }
  });
}

const server = http.createServer(handler);
server.listen(PORT, (err) => {
  if (err) {
    console.log(`error: ${err.message}`);
  } else {
    console.log(`server is running on port ${PORT}`);
  }
});
