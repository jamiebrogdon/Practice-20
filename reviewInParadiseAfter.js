// Create a function that takes in an array. 
//If the first number, is less than the last number, alert "Hi".
//If the first number is greater than the last number, alert "Bye". 
//If they are equal, alert "We close in an hour".

// let seriesOfNums = [ 10, 3, 5, 7, 9 ];

const takeInArray = (seriesOfNums) => {
    if (seriesOfNums[0] < seriesOfNums[seriesOfNums.length - 1]) {
        alert("Hi!");
    } else if (seriesOfNums[0] > seriesOfNums[seriesOfNums.length - 1]) {
        alert("Bye!");
    } else {
        alert("We close in an hour")
    }
};
