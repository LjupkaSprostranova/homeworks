console.log("Connected");
/*
Write a JavaScript function that takes an array of numbers 
and returns an array where the EVEN numbers from the input array are multiplied by two
 and the ODD ones are multiplied by three.

*/

let countNumbers = 0;

function oddOrEven(countNumbers){
    inputArray = [];
    outputArray = [];

    for(let i = 0; i < countNumbers; i ++){
        inputArray.push(prompt(`Enter numbers:`));
        if(inputArray[i] % 2 === 1){
            let newElementOutputArray = inputArray[i] * 3;
            outputArray.push(newElementOutputArray);
        } else if(inputArray[i] % 2 === 0){
            let newElementOutputArray = inputArray[i] * 2;
            outputArray.push(newElementOutputArray);
        }
    }
    return outputArray;
}

function askHowManyPrompts() {
    countNumbers = prompt(`How many numbers:`);
    result = oddOrEven(countNumbers);
    console.log(result);
}


askHowManyPrompts();
