const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json

//-----------------middlewares start

app.get('/weather', (req, res, next) => {
    console.log('Hello from weather middleware');
    next();
})

//-----------------middlewares stop

app.get('/hello', (req, res) => {
  res.send('Hello API World!')
})

/*
    Response object:
    {
        reports: [
            {   
                stationId: 12355,
                temperature: 24
            },
            {   
                stationId: 34564576,
                temperature: 30
            }
        ]
    }

*/
app.get('/weather', (req, res) => {    
    // In real life system, we would read the weather data from some DB
    // Here we use just some hard coded values.
    const data = {
        reports: [
            {   
                stationId: 12355,
                temperature: 24
            },
            {   
                stationId: 34564576,
                temperature: 30
            }
        ]
    };
    console.log('GET Weather operating');

    res.json(data);
})

app.post('/weather', (req, res) => {
    console.log(req.body);
    
    // now we should validate the body content to make sure that it is in correct format as specified in our design
    // after that you can use the data

    // read body just like any other object in JS
    // for example the temperature
    console.log(req.body.sensorData.temperature)


    res.send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})