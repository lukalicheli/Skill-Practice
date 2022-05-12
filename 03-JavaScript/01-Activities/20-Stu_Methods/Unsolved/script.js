var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// TODO: use an array method to add "Canis Major" to the beginning of
// constellations array and print the array to verify that it worked.

let addCanisMajor = constellations.unshift("Canis Major");

console.log(constellations);

// TODO: use an array method to remove the last element from planets array.
// Print planets to verify that it worked.

let removePlanet = planets.pop(planets.length - 1);

console.log(planets);

// TODO: create galaxy array by joining constellations and planets together.
// Print galaxy, planets, and constellations to verify a new array was created
// without changing planets or constellations.'
let joinedPlanets = constellations.concat(planets);

console.log(joinedPlanets);
console.log(constellations);
console.log(planets);

// TODO: define variable upperCaseStar which has star with all uppercase
// characters. Print upperCaseStar and star to verify that everything worked.

let upperCaseStar = star.toUpperCase();

console.log(upperCaseStar);
console.log(star);