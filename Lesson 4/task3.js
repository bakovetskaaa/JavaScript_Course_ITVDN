
// Функція повертає діапазони / залежить від message
function getValue(message) {

    while(true){ 
    let value = prompt(message);
// валідне поки не: NaN, "", 0
    let isValid = !isNaN(value) && value !== "" && value !== null;
    if(isValid) return Number(value);
    }
}

// викликаємо двічі функцію для визначення діапазону
let start = getValue("Введіть початок діапазону: ");
let end = getValue("Введіть кінець діапазону: "); 

// Цикл підраховує сумузначень діапазону
if (end < start){
    console.log("Кінець діапазону не може бути меншим за початок")
} else {
    let sum = 0;
// пробігаємо від початку до кінця збільшуючи на 1 значення і сумуючи їх
    for (let i = start; i <= end; i++) {
        sum = sum + i;
    }
    console.log(`Сума значень в діапазоні від ${start} до ${end} дорівнює ${sum}`)

}