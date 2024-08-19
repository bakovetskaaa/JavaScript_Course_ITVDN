

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = [];




while (true){

    let value = +prompt("Ведіть значення:");
    attempts.push(value);


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

console.log("Ви зробили " + attempts.length + " спроб. ");

attempts.forEach(x => console.log(x));


