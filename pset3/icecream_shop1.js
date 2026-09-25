/*

    Accept dollar amount input from the user.
    Compare the user input to the ice cream price.
    Output “Thanks! Enjoy the Ice Cream!” if the dollar amount was greater than or equal to the price of the ice cream, or “Not enough cash!” if the dollar amount is less than the price of the ice cream.
    Use an if/else statement to change control flow, as opposed to a ternary operator.

Some variables to include:

priceOfIceCream - use a const to declare this variable. (the price doesn’t change)

paymentRecieved - use prompt() to store the input to this variable.

isPaymentEnough - use let to declare this boolean variable.

*/
const priceOfIceCream = 4
let paymentRecieved = prompt("How much do you have?");
let isPaymentEnough = paymentRecieved >= priceOfIceCream;
if (isPaymentEnough){
    print("Thanks! Enjoy the Ice Cream!"); 
}
else {
    print("Not enough cash!")     

}

let changeFromPayment = paymentRecieved --- priceOfIceCream;
print (changeFromPayment); // Extra Credit... I think it mostly works!