/*
BONUS HOMEWORK
Create a recipe page from inputs

Ask the user for the name of the recipe
Ask the user how many ingredients do we need for the recipe
Ask the user for the name of every ingredient
Print the name of the recipe in the HTML as heading element, ex: h1-h6
Print all ingredients as an unordered list in the HTML
Extra: Use a table if you want to be fancy :)
*/

console.log("Connected");
// Get 3 inputs (name of the recipe, how many ingredients do we need, name of every ingredient)
//Print the first input as heading element
//Print the third input (array) as an unordered list.
let nameOfRecipe = prompt(`Enter the name of the recipe:`);
let howManyIngredients = parseFloat(prompt(`How many ingredients`)) ;
let theIngredients = [];
for(let i = 0; i < howManyIngredients; i++){
        theIngredients.push(prompt(`Name of the ingredient:`));
    }
function theRecipe(){
    let recipeName = document.getElementsByTagName(`h1`);
    let ingredientsList =document.getElementById(`unorderedListOfIngredients`);
    recipeName[0].innerHTML = nameOfRecipe;
    
        for(let i = 0; i < theIngredients.length ; i++){
        ingredientsList.innerHTML +=  `<li> ${theIngredients[i]} </li>`;
    }

}

theRecipe();
