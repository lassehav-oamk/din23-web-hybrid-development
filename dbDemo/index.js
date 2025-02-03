const express = require('express')
const app = express()
const port = 3000

const dbManager = require('../dbManager');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/initData', (req, res) => {
    dbManager.createTables("Users");
    dbManager.addColumn("Users", [{name: "name", type: "TEXT"}, {name: "email", type: "TEXT"}, {name: "password", type: "TEXT"}]);

    dbManager.insert("Users", {name: "Zayaan Camacho ", email: "zayaan@demo.com", password: "$2y$10$bbODacdveMTbkqjoRn88senVw7Frb/nTqmImbDxA4.jozZDnJCSQq"});
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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

     