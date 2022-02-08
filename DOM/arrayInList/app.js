console.log("connected");
/*
Print all numbers from an array and the sum

Create an array with numbers
Print all numbers from the array in a list element, in a new HTML page
Print out the sum of all of the numbers below the list
Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)
*/
let arrayOfNumbers = [12, 4, 9, 87, 16, 52, 91, 45];

let list = document.getElementById("emptyList");
  
for(let i = 0; i < arrayOfNumbers.length ; i++){
  list.innerHTML +=  `<li> ${arrayOfNumbers[i]} </li>`;
}

console.log(list);