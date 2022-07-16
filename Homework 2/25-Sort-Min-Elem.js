// Using sort, Write a JavaScript function to get the min element of an array of numbers
function getMin(arr) {
    console.log(arr.sort((a, b) => a - b)[0]);
}
getMin([1, 2, 3, 4, 5]);