// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function(n) {
    function fizzBuzz(n) {
    
        // Write your code here
        for(let i=0; i<=n; i++) {
            if(i%15 ===0) {
                console.log("FizzBuzz");
            } else if(i%5 === 0) {
                console.log("Buzz");
            } else if (i%3 ===0) {
                console.log("Fizz");
            } else {
                return i;
            }
        }
    }
};
