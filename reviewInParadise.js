// REVIEW IN PARADISE

// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favFood = "barbecue";
favFood = "curry";
alert(favFood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let secondCharacter = "Bubba"

alert(secondCharacter.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
/* let threeNums = (num1, num2, num3) => {
    alert((num1 / num2) * num3);
};

threeNums(100, 5, 5) */
//readablity tip from Leon: create a variable inside function as opposed to just alerting the equation:
let threeNums = (num1, num2, num3) => {
    let product = ((num1/num2) * num3);
    alert(product)
};

threeNums(100, 50, 2)


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
const getCubeRoot = (theNumber) => {
    console.log(Math.cbrt(theNumber));
};
getCubeRoot(64)
//found that it is infact a built in math method within JS -- no need to create the equation from scratch!

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
const isItSummerMonths = (month) => {
    let monthLC = month.toLowerCase();
    if (monthLC === "july" || monthLC === "june" || monthLC === "august"){
        alert("Yay!");
    } else {
     alert("Booo");
    }
};

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
const newNumber = (number) => {
    for (let i = 1; i <= number; i++){
        if(i % 5 !== 0){
            console.log(i)
        }
    }
};
