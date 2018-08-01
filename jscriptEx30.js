// Exercise 30
// Create an array with 4 names.
//     Print the third item in the array.
//     Delete the second item.
//     Print the third item in the array again.

var myArray = ["Jon", "Jacob", "Jingle", "Heimer Schmidt"];
document.getElementById("Result0").innerHTML = myArray;
document.getElementById("Result").innerHTML = myArray[2];
myArray.pop(1);

document.getElementById("Result1").innerHTML = myArray.splice(2,2);

document.getElementById("Result2").innerHTML = myArray;