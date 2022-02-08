console.log("Connected");
function sumNumbers(numOne,NumTwo,){
    if(numOne != NumTwo){
        let result = numOne + NumTwo;
        console.log(`The sum of the two numbers is ${result}`)
    }else if(numOne === NumTwo){
        let output = (numOne + NumTwo) * 3; 
        console.log(output);
    }
}

sumNumbers(4,4);