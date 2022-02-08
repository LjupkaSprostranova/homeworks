console.log("connected");
/*Write a JavaScript program to check two given numbers entered as input and return true
 if one of the number is greater than 30 or if their sum is 50.
Make sure to use a function for the check that accepts the numbers as parameters!
*/
let numberOne =parseFloat( prompt(`Write a number:`));
let numberTwo =parseFloat( prompt(`Write a number:`));

function isTrue(numOne, numTwo){
    if(numOne > 30){
        console.log(true);
    } else if (numTwo > 30){
        console.log(true);
    } else if ( numOne + numTwo === 50){
        console.log(true);
    } else{
        console.log(false);
    }
}

isTrue(numberOne, numberTwo);



