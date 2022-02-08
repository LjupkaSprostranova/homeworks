console.log("connected");
/*
Write a JavaScript program to check whether a number is divisible by 3.

Make sure to use a function for the check that accepts the number as parameter! */
function isItDevisible (number){
    if(number % 3 === 0){
        let result = number / 3 
        alert(`${number} is devisible by 3. The result is ${result}.`)
    } else {
        alert(`${number} is not devisible by 3.`)
    }
}
let theNumber = parseFloat(prompt(`Number:`));
isItDevisible(theNumber);