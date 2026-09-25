/*
Create a program that takes a number index from user input, and prints out the associated activity.

    If the user inputs 0, we should print activies[0], or “babysit tadpoles”.
    If the user inputs 1, print activies[1], or “flies for lunch”.
    If the user inputs 2, print activies[2], or “tongue stretch”.
    If the user inputs 4, it should “wrap back” to 0, and print activies [0] or “babysit tadpoles”.
*/

const activities = ["babysit tadpoles", "flies for lunch", "tongue stretch", "swimming lesson"];	

let index = prompt("What's your activity index?");
index = index % 4;
print(activities[index])
