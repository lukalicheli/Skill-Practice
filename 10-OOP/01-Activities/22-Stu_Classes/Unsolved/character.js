class Character {
  // TODO: Add a constructor which initializes name, strength, and hitPoints properties

  // TODO: Create a printStats() method that console logs this characters name, strength, and hit points

  // TODO: Create a isAlive() method that returns true if the characters hit points are >= 0. The function should return false when hit points drop below 0.

  // TODO: Create a attack() method that accepts an opponent character and decreases the opponent's "hitPoints" by this character's strength
}

// Creates two unique characters using the "character" constructor
const grace = new Character('Grace', 30, 75);
const dijkstra = new Character('Dijkstra', 20, 105);

// This keeps track of whose turn it is
let graceTurn = true;

grace.printStats();
dijkstra.printStats();

// This code runs the battle between the two characters
const turnInterval = setInterval(() => {
  // If either character is not alive, end the game
  if (!grace.isAlive() || !dijkstra.isAlive()) {
    clearInterval(turnInterval);
    console.log('Game over!');
  } else if (graceTurn) {
    grace.attack(dijkstra);
    dijkstra.printStats();
  } else {
    dijkstra.attack(grace);
    grace.printStats();
  }

  // Switch turns
  graceTurn = !graceTurn;
}, 2000);