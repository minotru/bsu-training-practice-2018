const express = require('express');

const PORT = 8080;
const staticPath = `${__dirname}/client/public`;

const app = express();
app.use(express.static(staticPath));
app.use((req, res) => {
  res.status(404).sendFile(staticPath + '/error.html');
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('failed to start server');
  } else {
    console.log('server is running on port ' + PORT);
  }
});
