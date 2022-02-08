console.log("connected");
let numbers = [2, 6, 8, 48, 954]

for(let i = 0; i < numbers.length; i++){
let max = Math.max(...numbers);
let min = Math.min(...numbers);
let sum = max + min;
console.log(`Max: ${max}, Min:${min}, sum ${sum}`);
}