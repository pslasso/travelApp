function updateUI(data) {

    //displays sections
    const image = document.querySelector("#image");
    image.style.display = "initial";
    const results = document.querySelector("#results");
    results.style.display = "initial";

    // populates the UI
    const daysof = Math.round(data[3].days / (1000 * 60 * 60 * 24));
    const city = JSON.stringify(data[2].city);
    console.log(city);
    const cityReg = `${city[1].toUpperCase(city)}${city.substring(2, (city.length -1)).toLowerCase(city)}`;
    console.log(cityReg);
    document.querySelector("#countdown").innerHTML = `Your trip to ${cityReg}, ${data[0].geoData.countryName} is ${daysof} days away.`;
    document.querySelector("#forecast").innerHTML = `Forecast:`;
    const icons = `http://localhost:8081/client/media/icons/${data[1].weatherData.icon}.png`;
    document.querySelector("#icon").src = icons;
    document.querySelector("#temp").innerHTML = `Max temp: ${data[1].weatherData.max_temp}°C / Min temp: ${data[1].weatherData.low_temp}°C`;
    document.querySelector("#description").innerHTML = `${data[1].weatherData.description} throughout the day.`;
    // sets the img
    const photoURL = `${data[4].photoData.webformatURL}`
    console.log(data[4].photoData.webformatURL);
    document.querySelector("#imageSRS").src = `${photoURL}`;
    document.querySelector("#tripLong").innerHTML = `Your trip will last ${data[5].tripLong} days, enjoy it!`;

    //disables button
    document.querySelector("#button").setAttribute("disabled", "disabled");

}

//clears the UI

function clearUI() {
    document.querySelector("#city").required = false;
    document.querySelector("#departing").required = false;
    document.querySelector("#returning").required = false;
    document.querySelector("#countdown").innerHTML = "";
    document.querySelector("#forecast").innerHTML = "";
    document.querySelector("#temp").innerHTML = "";
    document.querySelector("#icon").src = "";
    document.querySelector("#description").innerHTML = "";
    document.querySelector("#tripLong").innerHTML = "";
}

export {
    updateUI,
    clearUI
}