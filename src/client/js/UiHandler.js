function updateUI(data) {

    // populates the UI
    const daysof = Math.round(data[3].days / (1000 * 60 * 60 * 24));
    const countdown = document.getElementById("countdown").innerHTML = `Your trip to ${data[2].city}, ${data[0].geoData.countryName} is ${daysof} days away.`;
    const forecast = document.getElementById("forecast").innerHTML = `Forecast:`;
    const temp = document.getElementById("temp").innerHTML = `Max temp: ${data[1].weatherData.max_temp}°C / Min temp: ${data[1].weatherData.low_temp}°C`;
    const description = document.getElementById("description").innerHTML = `${data[1].weatherData.description} throughout the day.`;
    // sets the img
    const photoURL = `${data[4].photoData.webformatURL}`
    console.log(data[4].photoData.webformatURL);
    const photo = document.getElementById("imageSRS").src = `${photoURL}`;
    const tripLong = document.getElementById("tripLong").innerHTML = `Your trip will last ${data[5].tripLong} days, enjoy it!`;

}

//clears the UI

function clearUI() {
    const countdown = document.getElementById("countdown").innerHTML = "";
    const forecast = document.getElementById("forecast").innerHTML = "";
    const temp = document.getElementById("temp").innerHTML = "";
    const description = document.getElementById("description").innerHTML = "";
    const tripLong = document.getElementById("tripLong").innerHTML = "";
}

export {
    updateUI,
    clearUI
}