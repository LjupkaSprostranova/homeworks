console.log("connected");
//Write a JavaScript program to get a number and calculate its predecessor and successor!
function predecessorAndSuccessor(){

    let userNumber = prompt("Write any number:");
    userNumber = parseFloat(userNumber)

    let predecessor = userNumber - 1;
    let successor = userNumber + 1;

    console.log(`The predecessor is ${predecessor} and the successor is ${successor}`);
}

predecessorAndSuccessor();

