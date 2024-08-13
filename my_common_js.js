// Функція повертає діапазони / залежить від message
function getNumericValue(message) {

    while(true){ 
    let value = prompt(message);
// валідне поки не: NaN, "", 0
    let isValid = !isNaN(value) && value !== "" && value !== null;
    if(isValid) return Number(value);
    }
}