// Exercise 28
// Create an array.
//     Add four names to the array.
//     Print the array
var myArray = [];


function main() {

    while (myArray.length<4)
    {

        var input=prompt("Enter a name: ");
        myArray.push(input);

    }
    document.getElementById("Result").innerHTML = myArray
}

main();