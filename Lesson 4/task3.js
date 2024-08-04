

function getValue(message) {

    while(true){ 
    let value = prompt(message);

    let isValid = !isNaN(value) && value !== "" && value !== null;
    if(isValid) return Number(value);
    }
}

let start = getValue("Введіть початок діапазону: ");
let end = getValue("Введіть кінець діапазону: "); 

if (end < start){
    console.log("Кінець діапазону не може бути більшим за початок")
} else {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum = sum + i;
    }
    console.log(`Сума значень в діапазоні від ${start} до ${end} дорівнює ${sum}`)

}