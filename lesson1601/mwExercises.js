const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
    console.log(req.method + " " + req.route.path);
    console.log(req.ip);
    console.log(req.get('User-Agent'));

    next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})