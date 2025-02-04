const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const bcrypt = require('bcrypt');

const dbManager = require('../dbManager');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/initData', (req, res) => {
    dbManager.createTables("Users");
    dbManager.addColumn("Users", [{name: "name", type: "TEXT"}, {name: "email", type: "TEXT"}, {name: "password", type: "TEXT"}]);

    dbManager.insert("Users", {name: "Zayaan Camacho", email: "zayaan@demo.com", password: "$2y$10$bbODacdveMTbkqjoRn88senVw7Frb/nTqmImbDxA4.jozZDnJCSQq"});
    dbManager.insert("Users", {name: "Eliza Mccullough", email: "eliza@demo.com", password: "123456"});

    res.send('Database initialized');
})

app.post('/destroydb', (req, res) => {
    dbManager.drop("Users");
    res.send('Database destroyed');
});

app.get('/users', (req, res) => {
    const results = dbManager.query("SELECT * FROM Users");     
    res.json(results);
});


app.post('/users', (req, res) => {
  console.log(req.body);
  // get the data from the body
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  // insert the data into the database

  console.time('hash');
  bcrypt.hash(password, 15, function(err, hashedPassword){
    dbManager.insert("Users", {name: name, email: email, password: hashedPassword});

    console.timeEnd('hash');
    console.log('hash: ' + hashedPassword);
    res.send("Hash OK");
  });
})

/* username (email) and password are sent in body */
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const results = dbManager.query(`SELECT * FROM Users WHERE email = '${email}'`);
  if(results.length === 0){
    res.status(401).send('User not found');
    return;
  }  

  const userData = results[0];
  const userHashedPasswordFromDb = userData.password;

  bcrypt.compare(password, userHashedPasswordFromDb, function(err, result) {
    console.log('compare result: '+ result);
    if(result == true) {
      // generate JWT and return it
      res.send('Jes, matching username and password');
    } else {
      res.status(401).send('Incorrect password');
    }

  })

  
  res.send('OK');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

     