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
        body: JSON.stringify({ lat: geoData.lat, lng: geoData.lng, days: 1 }),
    });
    const weatherData = await weatherRes.json();
    console.log(weatherData);

    //Fetch data from Geonames.
    const cords = await fetch("http://localhost:8081/all");
    const cordsJson = await cords.json();

    console.log(`returning ${cords}`);
    console.log(cordsJson);

    const lat = cordsJson.lat;
    const lng = cordsJson.lng;

    console.log(lat);
    console.log(lng);



    //update UI
    Client.updateUI(cordsJson);





}

export {
    handleSubmit
}