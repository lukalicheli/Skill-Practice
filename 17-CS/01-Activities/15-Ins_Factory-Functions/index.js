// Create a function which accepts three arguments name, age, and city.
// We will be creating an object with a function instead of a class.
function createUser(name, age, city) {
  // Create an user object and map the function arguments to a key in the
  // object. This "user" object tracks the internal state of the user.
  const user = {
    name,
    age,
    city,
  };

  // Return two inner functions.
  return {
    introduceSelf() {
      // Instead of using the `this` keyword, we use the object we created in
      // the outer function's scope.
      return console.log(
        `Hi my name is ${user.name} and I am currently ${user.age} years old!`
      );
    },

    location() {
      return console.log(`${user.name} is located in ${user.city}`);
    },

    birthday() {
      user.age++;
      console.log(`${user.name} turns ${user.age} today!`);
      return user.age;
    }
  };
}

// Create a user without using the `new` keyword different from how we do it
// with classes.
const userOne = createUser("Beverly", 58, "Phoenix");

// Call the two methods attached to our `createUser` function to see if the user
// object is logging the correct values.
userOne.introduceSelf();
userOne.location();
userOne.birthday();

/* 
  Summary
  -----------

  - Factories provide an alternative to constructors/classes.
  - No use of `new` keyword.
  - Data may be kept private within the closure created by the factory function.
*/
