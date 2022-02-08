console.log("Connected");
/*
Write a JavaScript function that takes all the items from an array
 of strings and joins them in a string separated by white space.
 Use loops.
*/ 
   let myStringArray = ["Hello", "my", "name", "is", "Ljupka", "i am", "currently", "learning", "how", "to", "use", "JavaScript."];

function makeAString(stringsArray){
   let theString = stringsArray.join(" ");
   console.log(theString);
}
makeAString(myStringArray);
