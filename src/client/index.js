import { handleSubmit } from './js/formHandler'
import { updateUI, clearUI } from './js/UiHandler'
import { setMaxDate, setReturning } from './js/dateHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/header.scss'
import 'regenerator-runtime/runtime';

console.log("CHANGE!!");
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button").addEventListener("click", handleSubmit);
    document.getElementById("clearButton").addEventListener("click", clearUI);
});



export {
    handleSubmit,
    updateUI,
    clearUI,
    setMaxDate,
    setReturning
}