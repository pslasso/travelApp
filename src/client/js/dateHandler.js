function setMaxDate() {
    let date = new Date();
    let max = (date.getTime() + (16 * (1000 * 60 * 60 * 24)));
    let maxDate = new Date(max);
    let month = maxDate.getMonth() + 1;
    let day = maxDate.getDate();
    let year = maxDate.getFullYear();
    let shortMaxDate = `${year}-0${month}-${day}`;
    let input = document.getElementById("departing");
    input.max = shortMaxDate;
}

window.onload = setMaxDate();

export {
    setMaxDate
}