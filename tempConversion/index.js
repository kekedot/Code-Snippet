const input = document.getElementById("inputNum");
const toFh = document.getElementById("toFh");
const toCl = document.getElementById("toCl");
const result = document.getElementById("result");
let temp;

function convert() {

    if (toFh.checked) {

        temp =  Number(input.value);
        temp = ( 9 / 5 * temp) + 32;
        result.textContent = `${temp.toFixed(2)} °F`;

    } else if (toCl.checked) {
        
        temp = Number(input.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = `${temp.toFixed(2)} °C`;

    } else {
        result.textContent = "PLease Select a Unit";
    }
}