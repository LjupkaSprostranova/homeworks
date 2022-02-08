console.log("connected");
/*Write a Javascript program that takes a grade as input.
If the grade is A print "Excellent job!",
if the grade is B print "Good job!",
if the grade is C print "Passed",
if the grade is D print "Not so good!",
if the grade is F print "Failed!".
In any other case print "Unknown grade!".

Note: Try not to use if-else statements. Use another structure.*/

let studentGrade = prompt("Enter your grade:");
studentGrade = studentGrade.toUpperCase();
let messages = ['Excellent job!','Good job!','Passed','Not so good!','Failed!','Unknown grade!'];

function checkGrade(theGrade) {
    switch (theGrade) {
        case 'A':
            alert(messages[0]);
            break;
        case 'B':
            alert(messages[1]);
            break;
        case 'C':
            alert(messages[2]);
            break;
        case 'D':
            alert(messages[3]);
            break;
        case 'F':
            alert(messages[4]);
            break;
        default:
            alert(messages[5]);
            break;

    }
}



checkGrade(studentGrade);
