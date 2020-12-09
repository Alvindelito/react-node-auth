const express = require('express');
const app = express();
const path = require('path');
const db = require('./database/index');

app.use(express.json());

app.get('/users/login', (req, res) => {
  const queryStr = `SELECT * FROM users WHERE email='${req.body.email}' AND password='${req.body.password}'`;
  db.query(queryStr, (err, result) => {
    if (err) res.status(400).json();
    else if (result.length < 1) res.status(401).send('-1');
    else res.status(200).send(result);
  })
})

app.post('/users/register', (req, res) => {
  const queryStr = `INSERT INTO users (email, password) VALUES ('${req.body.email}', '${req.body.password}')`;
  db.query(queryStr, (err, result) => {
    if (err) res.status(400).send(err);
    else res.status(201).send('successfully registered');
  })
  db.end();
})

app.use('/', express.static(path.join(__dirname, 'dist')));

const PORT = 3000;
app.listen(PORT, console.log('listening'));