// Using from, and Set create a function that is removing duplicates from an array 
function removeDu() {
let arr = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let set = new Set(arr);
let newArr = Array.from(set);
console.log(newArr);
};
removeDu();