/*
Prompt from a user how many frogs are trying to jump in.
Compare the user input against a const variable of 15.
If the input frog count is less than or equal to 15, print “Come on in!”.
If the input frog is greater than 15, print “It’s too crowded!”
*/
let numFrogs = prompt("How many frogs are about to jump in?");
const maxFrogCapacity = 15;
let isPondOverCapacity = (numFrogs >= maxFrogCapacity);
let messageToPrint = isPondOverCapacity ? "It's too crowded!" : "Come on in!";
print(messageToPrint);