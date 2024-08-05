// variable - polindrom 
let initualValue = "авссва";
// initualization of value (with no current case and without gaps)
let value = initualValue.replace(/\s+/g, "").toLowerCase();
// variable lenght
let len = value.length;
// variable palindrome (true or false) for FOR
let isPalindrom;
// все в -1
// а != -1-а
// 0 != -1-0
for (let i = 0; i < len / 2; i++) {
    if (value[i] !== value[len - 1 - i]){
        isPalindrom = false;
        break;
    }
isPalindrom = true;   
}

if(isPalindrom){
    console.log("Значення " + initualValue + " є паліндромом.")
} else {
    console.log("Значення " + initualValue + " не є паліндромом.")

}