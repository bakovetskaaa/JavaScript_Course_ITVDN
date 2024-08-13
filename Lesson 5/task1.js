let  getCircleArea = radius => { return Math.PI * Math.pow(radius, 2)};

let getCirclePerimeter = radius => { return 2 * Math.PI * radius};


const radius = getNumericValue("Введіть радіус: ");
let area = getCircleArea(radius);
let perimeter = getCirclePerimeter(radius);


console.log(area);
console.log(perimeter);




