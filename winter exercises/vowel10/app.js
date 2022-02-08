console.log("connected");
/*
Write a JavaScript program that gets a string as input. 
If the string begins with a vowel (a, e, i, o, u) add the string
"Hit" at the beginning and end of the entered string.
If not, print the entered string.

Make sure to use a function that returns the string that needs to be inspected!
*/
let userString = prompt("Write a sentence:");
function isItVowel(enteredString){
    let theString = `Hit`
    let vowels = ["a", "e", "i", "o", "u"] 
    for(let i = 0; i < enteredString.length; i++){
        if(enteredString[0] === (vowels[i])){
            console.log(`${theString} ${enteredString} ${theString}`);
        } else {
            console.log(enteredString);
        }
    }
}
isItVowel(userString);