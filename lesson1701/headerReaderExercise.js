const express = require('express')
const app = express()
const port = 3000

const userData = [
    {
        id: 2354,
        name: "John Doe",
        email: "john@email.com"
    },
    {
        id: 2355,
        name: "Jane Doe",
        email: "jane@email.com"
    },
    {
        id: 2356,
        name: "Jim Doe",
        email: "jim@email.com"
    }
];

app.use((req, res, next) => {
    const userId = req.get('user-id');
    if(userId == undefined) {
        res.status(401).send('Unauthorized');
        return;
    }
    const user = userData.find(u => u.id == userId);
    if(user == undefined) {
        res.status(404).send('Not Found');
        return;
    }

    req.userInfo = user;


    next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/header-demo', (req, res) => {

    const user = req.userInfo;

    res.send('User with name ' + user.name + ' found in header info');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
     