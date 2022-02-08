console.log("Connected");
//Write a function that takes an array of strings
//The func should return concatenation of the shrortest and the longest string
//If there are "not string" elements, the func should remove them first.
let inputArray = prompt('Write a sentence').split(' ');
console.log('INPUT STRING:', inputArray);

function concatenateLongestAndShortestStrings(arrayOfStringsAndNumbers){
    //console.log(arrayOfStringsAndNumbers)
    let longestString = '';
    let shortestString = '';
    for (let i = 0; i < arrayOfStringsAndNumbers.length; i++) {
        if (isNaN(parseFloat(arrayOfStringsAndNumbers[i]))) {
            //Asign default values to compare, we assign first string
            if (i === 0) {
                longestString = arrayOfStringsAndNumbers[i];
                shortestString = arrayOfStringsAndNumbers[i];
            }

            //Is not a number check if its smallest or longest string and concatanete
            if (arrayOfStringsAndNumbers[i].length > longestString.length) {
                longestString = arrayOfStringsAndNumbers[i];
            }
            if (arrayOfStringsAndNumbers[i].length < shortestString.length) {
                shortestString = arrayOfStringsAndNumbers[i];
            }
        }
    }
    alert('The concatenated string is:' + longestString + " " + shortestString);
}

concatenateLongestAndShortestStrings(inputArray);