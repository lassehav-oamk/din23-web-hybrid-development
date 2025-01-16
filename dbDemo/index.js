const express = require('express')
const app = express()
const port = 3000

const dbManager = require('../dbManager');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/initData', (req, res) => {
    dbManager.createTables("Users");
    dbManager.addColumn("Users", [{name: "name", type: "TEXT"}, {name: "email", type: "TEXT"}]);
    /* Insert following data
    Zayaan Camacho, zayaan@demo.com 
    Eliza Mccullough, eliza@demo.com 
    Eloise Wade, eloise@demo.com 
    Ptolemy Cervantes, ptolemy@demo.com  
    */

    dbManager.insert("Users", {name: "Zayaan Camacho ", email: "zayaan@demo.com"});
    dbManager.insert("Users", {name: "Eliza Mccullough", email: "eliza@demo.com"});
    dbManager.insert("Users", {name: "Eloise Wade", email: "eloise@demo.com"});
    dbManager.insert("Users", {name: "Ptolemy Cervantes", email: "ptolemy@demo.com"});
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

     