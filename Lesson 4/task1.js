

let randomNumber = Math.floor(Math.random() * 100) + 1;


while (true){

    let value = +prompt("Ведіть значення:");

    if (value == randomNumber){
      alert("Ви відгадали. Загадане число " + randomNumber)
      break;
      ;
    } else if (value > randomNumber){
        alert("Ви не відгадали. Загадане число є менше");
    }else if (value < randomNumber){
        alert("Ви не відгадали. Загадане число є більше");
    }
}