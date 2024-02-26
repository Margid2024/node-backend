1)install all modules
const express = require('express');
const os = require('os');
const fs = require('fs');
const path = require('path');

2)Express application create and define port
const app = express();
const port = 3000;

3)Create API for ServerInfo

4)Server listen
app.listen(port)

5)Run the file
node server.js

6)go to browser and run localhost:5000/ or localhost:5000/list-directory
