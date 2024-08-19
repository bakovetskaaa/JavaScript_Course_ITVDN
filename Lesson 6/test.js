


let cities = ["Kyiv", "Paris", "London"];
let number = [1, 2, 3, 4]


cities.push("Test");

  
for (let index = 0; index < cities.length; index++) {
    const city = cities[index];
    console.log(city);
}

for (const prop in cities) {
    console.log(prop);
}  

// iterator / generators / yield
for (const element of cities) {
    console.log(element);
}


// console.log(cities.length);
// cities[1] = "AAA";

// cities[10] = "Berlin";
// console.log(cities[0]);
// console.log(cities[1])
// console.log(cities[10]);
// console.log(cities.length);




