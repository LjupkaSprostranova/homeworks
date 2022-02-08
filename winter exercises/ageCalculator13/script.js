console.log("connected");
let userYear = prompt("Your year of birth is?");
const d = new Date();
     let currentYear = d.getFullYear();

function ageCalculator(currentYear, yearOfBirth){
     
     let userAge = currentYear - yearOfBirth;
     console.log(`You are aprox. ${userAge} years old`);
     return userAge;
}

ageCalculator(currentYear, userYear);

