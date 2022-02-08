console.log("connected");
/*Write a JavaScript program that gets a string as input. 
If the string ends with "na", print "Hit", else print "No hit".
Make sure to use a function that returns the string that needs to be inspected!*/
const stringToFind = 'no';

let userString = prompt(`Write a sentence:`);
function returnString(theString){
    //split into arrays separated by the string, if last element of \
    // array is empty means the substring was last in the string
    let splitTheString = userString.split(stringToFind);

    if (splitTheString[splitTheString.length - 1] === '') {
        console.log('Hit!')
    } else {
        console.log('No Hit!')
    }
}

returnString(userString);