async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let city = document.getElementById('city').value;

    //calculates the number of days remaining to the trip
    let departure = document.getElementById("departing").valueAsNumber;
    let date = new Date();
    let days = departure - date.getTime();
    console.log(`days to go:${Math.round(days/ (1000*60*60*24))}`);


    /*api call geonames*/
    const geoRes = await fetch("http://localhost:8081/coords", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ city: city }),
    });
    const geoData = await geoRes.json();
    console.log(geoData);


    /*api call weatherbit*/
    const weatherRes = await fetch("http://localhost:8081/weather", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ lat: geoData.lat, lng: geoData.lng, days: days }),
    });
    const weatherData = await weatherRes.json();
    console.log(weatherData);


    //Fetches data from server.
    const cords = await fetch("http://localhost:8081/all");
    const cordsJson = await cords.json();

    const weather = await fetch("http://localhost:8081/all");
    const weatherJson = await weather.json();

    console.log(`returning ${weatherJson}`);
    console.log(cordsJson);


    //update UI
    Client.updateUI(cordsJson);

}

export {
    handleSubmit
}