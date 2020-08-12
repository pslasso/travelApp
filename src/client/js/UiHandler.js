function updateUI(cords) {
    // selecting the result container from DOM
    const agreement = document.getElementById("agreement").innerHTML = `lat: ${cords.lat}`;
}

export {
    updateUI
}