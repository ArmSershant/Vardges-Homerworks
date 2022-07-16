// Using slice, Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
function getFirstElem(arr, n) {
    console.log( arr.slice(0, n));
}
getFirstElem([1, 2, 3, 4, 5], 3);