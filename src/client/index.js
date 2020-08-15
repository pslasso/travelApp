import { handleSubmit } from './js/formHandler'
import { updateUI, clearUI } from './js/UiHandler'
import { setMaxDate, setReturning } from './js/dateHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/header.scss'

console.log("CHANGE!!");
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button").addEventListener("Click", handleSubmit(event));
    document.getElementById("clearButton").addEventListener("Click", clearUI());
});

export {
    handleSubmit,
    updateUI,
    clearUI,
    setMaxDate,
    setReturning
}