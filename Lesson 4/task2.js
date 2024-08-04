// погано працює, але працює з самим алгоритмом паліндрома

let initualValue = "jJJ J";
let value = initualValue.replace(/\s+/g, "").toLowerCase();
let len = value.length;

let isPalindrom;

for (let i = 0; i < len / 2; i++) {
    if (value[1] !== value[len - 1 - i]){
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