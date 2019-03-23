const express = require('express');
const knex = require('knex');

const dbConfig = require('./knexfile.js')
const db = knex(dbConfig.development);

const server = express();

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
