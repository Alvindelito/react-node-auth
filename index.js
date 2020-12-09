const express = require('express');
const app = express();
const path = require('path');
const db = require('./database/index');
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(express.json());

app.get('/users/login', (req, res) => {
  const plainTextPassword = req.body.password;

  const queryStr = `SELECT password FROM users WHERE email='${req.body.email}'`;
  db.query(queryStr, (queryErr, queryResult) => {
    if (queryErr) res.status(400).send(queryErr);
    else if (queryResult.length < 1) res.status(401).send('-1');
    else {
      bcrypt.compare(plainTextPassword, queryResult[0].password, (err, result) => {
        if (err) res.status(400).send(err);
        else res.status(201).send(result);
      })
    }
  })
})

// encrypt plaintext password into a hash and store into db
app.post('/users/register', (req, res) => {
  const plainTextPassword = req.body.password;

  bcrypt.hash(plainTextPassword, saltRounds, (err, hash) => {
    const queryStr = `INSERT INTO users (email, password) VALUES ('${req.body.email}', '${hash}')`;
    db.query(queryStr, (err, result) => {
      if (err) res.status(400).send(err);
      else res.status(201).send('successfully registered');
    });
  });
})

app.use('/', express.static(path.join(__dirname, 'dist')));

const PORT = 3000;
app.listen(PORT, console.log('listening'));