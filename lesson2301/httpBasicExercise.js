const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Public World!')
})

const correctUserName = "JohnDoe";
const correctPassword = "HelloWorld";

function httpBasicAuth(req, res, next) {
    const authField = req.get('Authorization');
    if(authField == undefined) {
        res.status(401).send();
        return;
    }
    const authStrs = authField.split(' ')

    console.log(authField);
    console.log(authStrs);

    let buff = Buffer.from(authStrs[1], 'base64');  
    let httpBasicUsernamePassword = buff.toString('utf-8');

    console.log(httpBasicUsernamePassword);
    
    const authDataReady = httpBasicUsernamePassword.split(":");
    console.log(authDataReady);

    const username = authDataReady[0];
    const password = authDataReady[1]

    console.log('username: ' + username);
    console.log('password: ' + password);

    // after getting access to incoming username & password, now lets compare the them to our stored information
    // in real world we would seach our user data based on username

    if(correctUserName == username) {
        if(correctPassword == password) {
            // now we are golden! We have correct info, so we can return successful resource response
            next();
            return;
        }
    }
    
    res.status(403).send();
}

// here we have an endpoint secured with http basic
app.get('/httpbasic', httpBasicAuth, (req, res) => {
    res.send("Hello HTTP Basic world");    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
    