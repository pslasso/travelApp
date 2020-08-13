function updateUI(data) {
    // selecting the result container from DOM
    const daysof = Math.round(data[3].days / (1000 * 60 * 60 * 24));
    const countdown = document.getElementById("countdown").innerHTML = `Your trip to ${data[2].city}, ${data[0].geoData.countryName} is ${daysof} days away.`;
    const forecast = document.getElementById("forecast").innerHTML = `Forecast:`;
    const temp = document.getElementById("temp").innerHTML = `Max temp: ${data[1].weatherData.max_temp}°C / Min temp: ${data[1].weatherData.low_temp}°C`;
    const description = document.getElementById("description").innerHTML = `${data[1].weatherData.description} throughout the day.`
}

function clearUI() {
    const countdown = document.getElementById("countdown").innerHTML = "";
    const forecast = document.getElementById("forecast").innerHTML = "";
    const temp = document.getElementById("temp").innerHTML = "";
    const description = document.getElementById("description").innerHTML = "";
}

export {
    updateUI,
    clearUI
}