const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
    const dateStr = new Date().toUTCString();
    const logStr = dateStr + " " + req.method + " " + req.originalUrl + " " + req.ip + " " + req.get('User-Agent') + "\n";
    fs.appendFile('access.log', logStr, (err) => {});

    next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/demo', (req, res) => {
    res.send('Demo!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})