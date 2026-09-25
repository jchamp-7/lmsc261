/*
Create a program that takes a number index from user input, and prints out the associated activity.

    If the user inputs 0, we should print activies[0], or “babysit tadpoles”.
    If the user inputs 1, print activies[1], or “flies for lunch”.
    If the user inputs 2, print activies[2], or “tongue stretch”.
    If the user inputs 4, it should “wrap back” to 0, and print activies [0] or “babysit tadpoles”.
*/

let userInput = prompt("Enter a number index (0, 1, 2, or 4):");
const activities = ["babysit tadpoles", "flies for lunch", "tongue stretch", "swimming lesson"];	
let userInput0 = "babysit tadpoles";
let userInput1 = "flies for lunch";
let userInput2 = "tongue stretch";
let userInput4 = "babysit tadpoles";
print(activities[userInput]);
