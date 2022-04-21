// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    if (!input) {
      throw new Error("no grade provided");
    }
    let response;
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === "number") {
      if (grade < 60) response = "F";
      else if (grade < 70) response = "D";
      else if (grade < 80) response = "C";
      else if (grade < 90) response = "B";
      else response = "A";
      return response;
    }

    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === "string") {
      switch (input) {
        case "A":
          response = "90 - 100";
          break;
        case "B":
          response = "80 - 89";
          break;
        case "C":
          response = "70 - 79";
          break;
        case "D":
          response = "60 - 69";
          break;
        case "F":
          response = "0 - 59";
          break;
        default:
          response = "0";
          break;
      }
      return response;
    }

    // Throw an error if the type of grade is not a string or number.
    throw new TypeError("Expected grade to be a string or number.");
  };
}

const John = new Student("John", "Appleseed", "30");
console.log("John.displayGrade(95):", John.displayGrade(95));
console.log("John.displayGrade('B'):", John.displayGrade("B"));
