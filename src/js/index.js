'use strict';

const express = require('express');
const router = require('./router');
const server = express();

const PORT = process.env.PORT || 5000;

server.use(express.json());
server.use(router);

server.listen(PORT , () => {
  console.log('Server started on port: http://localhost:' + PORT);
} );