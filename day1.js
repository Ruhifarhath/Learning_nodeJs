var prompt= require('prompt-sync')();

// let age=prompt("Enter Age : ")
// if(age<18){
//     console.log("20% discount")
// }
// else if(age>=65){
//     console.log("30% ")
// }
// else{
//     console.log("no discount")
// }


//  question 2

// const length=prompt("l: ")
// const breadth=prompt("b: ")

// console.log("Area= ",length* breadth)

//Q3  OBJECTS

// const product={
//     price:67,
//     inStock:false
//  };
 
//   product.inStock=true
//   product.price=45
// product = { price: 100, inStock: true }; // This will throw an error

 
//   console.log(product.price)
//   console.log(product.inStock)
 

// Q4 ARRAYS

let guestList = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
let party=guestList.filter(checkGuest);

function checkGuest(name) {
    if (guestList.includes(name)) {
        console.log(`Welcome to the party, ${name}!`);
    } else {
        console.log(`${name} is not on the guest list.`);
    }
    
}
console.log("filter works: ",party)
// Example usage:
let nameToCheck = prompt("What's your name? : ");
checkGuest(nameToCheck);

