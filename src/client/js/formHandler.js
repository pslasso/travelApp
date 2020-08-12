async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let city = document.getElementById('city').value;

    /*api call geonames*/
    await fetch("http://localhost:8081/cords", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ city: city }),
    });

    /*api call weatherbit*/
    await fetch("http://localhost:8081/weather", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ lat: lat, lng: lng, days: days }),
    });


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


    //dateHandler
    let departure = document.getElementById("departing").valueAsNumber;
    console.log(departure);
    let date = new Date();
    console.log(date);
    let days = departure - date.getTime()
    console.log(`days to go:${Math.round(days/ (1000*60*60*24))}`);

}

export {
    handleSubmit
}