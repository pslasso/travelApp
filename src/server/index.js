const bodyParser = require('body-parser');
var axios = require('axios');
var path = require('path');
const express = require('express');
var request = require("request");
const dotenv = require('dotenv');

const app = express();

app.use(express.static('dist'))

dotenv.config();

console.log(__dirname)

let apiKey = process.env.API_KEY;

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());



// TODO-ROUTES!

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
});


app.post('/coords', async(req, res) => {
    try {
        const getCoords = await axios.post(`http://api.geonames.org/searchJSON?q=${req.body.city}&maxRows=1&username=pslasso`);

        const { data } = getCoords;

        const { lat } = data;
        const { lng } = data;
        const { countryName } = data;

        cords = {
            lat: data.geonames[0].lat,
            lng: data.geonames[0].lng,
            countryName: data.geonames[0].countryName
        };

        res.send(cords);
        console.log(data);

    } catch (error) {
        console.log(`${error}`);
    }
});

app.post('/weather', async(req, res) => {
    try {
        const getWeather = await axios.post(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${req.body.lat}&lon=${req.body.lng}&days=${req.body.days}&key=416b04807b2946e3a7aab1cfd38f306e`);

        const { weatherData } = getWeather;

        const { max_temp } = weatherData;
        const { low_temp } = weatherData;
        const { description } = weatherData;

        weather = {
            max_temp: data.max_temp,
            low_temp: data.low_temp,
            description: data.weather.description
        };

        res.send(weather);
        console.log(weatherData);

    } catch (error) {
        console.log(`${error}`);
    }
});

app.get("/all", (req, res) => {
    res.send(wea);
    res.send(weather);
    console.log(`returning => ${cords}`);
    console.log(`weather => ${weather}`);
});


// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
});