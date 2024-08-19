
function min(array) {
    let min = Number.MAX_VALUE;
    for (const value of array) {
        if(value < min)
            min = value;
    }

    return min;

}

function max(array) {
    return Math.max(...array);
}

function sum(array) {
    let sum = 0;
    for (const value of array) {
    sum += value;
    }

    return sum;
}


let test = [1, 2, 4];
let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3, -8, ...test];

console.log(min(values));
console.log(max(values)); 
console.log(sum(values));

 