// WRITE YOUR CODE HERE
let studentArr = ["Luka", "Shekib", "Jamshid"];

let numberOfStudents = studentArr.length; 

console.log(numberOfStudents);

for(i=0; i < numberOfStudents; i++ ) {
    console.log(studentArr[i]);
}

studentArr[0] = "Stephanie";

console.log(studentArr);

replacedName = studentArr[0];

console.log(replacedName + " is in class");