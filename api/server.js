import { readFileSync } from "node:fs"

import { compareSync, hashSync } from "bcrypt"
import express from "express"
import mysql from "mysql"

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'PROJECTTHESIS',
  multipleStatements: true,
});

db.connect((err) => {
  if (err) throw err;

  console.log('MySQL connection established');
});

const q = readFileSync('./api/schema.sql', { flag: 'r' });
db.query(q.toString());

db.query(`
  INSERT INTO ACCOUNT(username,password_digest)
  VALUES ('mlmejo', '${hashSync('thanatos%', 10)}');
`);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/login', (req, res) => {
  const username = req.query.username;
  const password = req.query.password;

  if (!username) {
    res.send('Username field is required')
    return;
  }

  if (!password) {
    res.send('Password field is required');
    return;
  }

  db.query(`SELECT * FROM ACCOUNT WHERE username = ?`, [username], (err, result) => {
    if (err) throw err;

    if (result.length != 1) {
      res.send('User not found');
      return;
    }

    if (!compareSync(password, result[0].password_digest)) {
      res.send('Incorrect password');
      return;
    }

    res.send('WELCOME TO MAON');
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
