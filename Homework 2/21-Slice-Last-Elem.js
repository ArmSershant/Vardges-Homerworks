// Using slice, Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array
function getLastElement(arr, n) {
    let lastElements = arr.slice(-n);
    console.log('Last Elements: ', lastElements);
}
getLastElement([1, 2, 3, 4, 5], 3);