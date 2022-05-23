// TODO: create customerDrink object with name, sugars, and isReady properties
let customerDrink = {
    name: "Luka",
    sugars: 3, 
    isReady: true,
}
// TODO: print the customerDrink object
console.log(customerDrink);
// TODO: print ready message IF the drink is ready
if(customerDrink.isReady) {
    console.log("Ready for pick-up");
}

// TODO: print in queue message IF the drink is not ready
if(!customerDrink.isReady) {
    console.log("in queue");
}
////////