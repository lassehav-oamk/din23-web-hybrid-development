const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const express = require('express')
const jwt = require('jsonwebtoken');
const app = express()
const port = 3000

// FOR DEMO ONLY, DO NOT DO THIS IN PRODUCTION
const MYSECRETJWTKEY = "mysecret";

passport.use(new BasicStrategy(function(username, password, done) {
    // we can use the username and password to search our user data
    console.log('Basic strategy executing');
    console.log('username: ' + username);
    console.log('password: ' + password);

    // In a real application, we would use the username 
    // and password to search our user data
    const usernameAndPasswordCorrect = true;

    if(usernameAndPasswordCorrect){
     done(null, {
         foo: 'bar'
     });
    }
    else {
        done(null, false);
    }
    
}));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/signin',
    passport.authenticate('basic', { session: false }),
    (req, res) => {
        // Create JWT and send it in the response
        const token = jwt.sign({ foo: 'bar' }, MYSECRETJWTKEY);
        res.json({
            token: token
        });
})

// This operation is protected by JWT
app.get('/protected', (req, res) => {
    // is the Authorization field present in the header?
    const authField = req.get('Authorization');
    if(authField == undefined) {
        console.log('No auth field in headers');
        res.status(401).send();
        return;
    }

    const bearerCheck = authField.slice(0, 6);
    console.log(bearerCheck);
    if(bearerCheck != "Bearer")
    {
        console.log('No Bearer in the auth field');
        res.status(401).send();
        return;
    }

    // next extract the token from the authField
    const authStrs = authField.split(' ');
    const token = authStrs[1];
    console.log('Token value is: ' + token);

    // validate the token
    try {
        const payload = jwt.verify(token, MYSECRETJWTKEY);
        // respond with successfull operation
        res.send('Great, token is valid');
    } catch (error) {
        console.log('Token not valid')
        res.status(401).send();
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})