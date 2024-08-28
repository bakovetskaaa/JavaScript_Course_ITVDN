
class Product {
    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;

    }

    displayInfo() {
        console.log(this.name);
        console.log(this.price);
    }
}


let product1 = new Product(1, "Phone", 10000);

let product2 = new Product(2, "Laptop", 50000);

let product3 = new Product(3, "Car", 700000);
let product4 = new Product(4, "Pen", 10);


// function createProduct(id, name, price){
//         let product = {};

//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.displayInfo = display;    
//         return product;
// }


 product1.displayInfo();
 product2.displayInfo();
 product3.displayInfo();
 product4.displayInfo();
