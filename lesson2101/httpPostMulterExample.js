const express = require('express')
const multer = require('multer');
const mult = multer({ dest: './fileUploads'});
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// This will receive a single file via HTTP multipart
// file shall be identified as 'example' form field name
app.post('/uploadDemo', mult.single('example'), (req, res) => {
    // now i can access the file from req.file
    // the file was known as "example" in the form

    console.log(req.file);
    
    res.send("OK");
})

app.post('/multipleupload', mult.array('example', 3), (req, res) => {
    console.log(req.files);

    res.send('Multiple file OK');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      