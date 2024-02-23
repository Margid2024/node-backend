const express = require('express');
const os = require('os');

const app = express();
const port = process.env.port || 5000;

app.get('/', (req, res) => {
  const serverInfo = {
    server: {
      ip: req.connection.remoteAddress,
      hostname: os.hostname(),
    },
    memory: {
      used: ((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024).toFixed(2),
      total: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2),
      pct:
        (((os.totalmem() - os.freemem()) / os.totalmem()) * 100).toFixed(2) +
        ' %',
    },
    storage: {
      used: ((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024).toFixed(2),
      total: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2),
      pct:
        (((os.totalmem() - os.freemem()) / os.totalmem()) * 100).toFixed(2) +
        ' %',
    },
    cpu: {
      used: os.loadavg()[0].toFixed(2) + ' %',
    },
  };
  res.json(serverInfo);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
