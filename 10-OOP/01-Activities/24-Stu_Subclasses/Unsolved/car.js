// TODO: Import the parent class

// TODO: Create a `Car` class that extends the `Vehicle` class

// TODO: Car inherits id, numberOfWheels, and sound from the Vehicle class, with
// numberOfWheels set as 4 and sound set as beep.

// TODO: Car constructor accepts id, color, and passengers and adds them as
// properties

// TODO: Give Car a useHorn() method that prints the car's sound to the console.

// TODO: Give Car a checkPassengers() method that checks whether there are fewer
// than four passengers.
//
// If there are, print a message of how much room you have left in the car in
// the console. Otherwise, print "This car only seats 4 people. You have too
// many passengers!" in the console.

const carPassengers = [
  "Aristotle",
  "Confucius",
  "Socrates",
  "Lao-Tzu",
  "Plato",
];

const car = new Car(15, "blue", carPassengers);

console.log("---CAR---");
car.printInfo();
car.useHorn();
car.checkPassengers();
