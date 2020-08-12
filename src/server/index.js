let baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
let lang = '&lang=en';

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


app.post('/analyse', async(req, res) => {
    try {
        const analyse = await axios.post(`${baseURL}?key=${apiKey}${lang}&txt=${req.body.formText}&model=general`);

        const { data } = analyse;

        const { score_tag } = data;
        const { agreement } = data;
        const { subjectivity } = data;
        const { confidence } = data;
        const { irony } = data;

        sentiment = {
            score_tag,
            agreement,
            subjectivity,
            confidence,
            irony,
        };

        res.send(sentiment);
        console.log(data)

    } catch (error) {
        console.log(`${error}`);
    }
});

app.get("/all", (req, res) => {
    res.send(sentiment);
    console.log(`returning => ${sentiment}`);
});


// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
});