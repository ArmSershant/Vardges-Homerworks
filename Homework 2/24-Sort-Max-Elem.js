// Using sort, Write a JavaScript function to get the max element of an array of numbers
function getMax(arr) {
    console.log(arr.sort((a, b) => b - a)[0]);
}
getMax([1, 2, 3, 4, 5]);