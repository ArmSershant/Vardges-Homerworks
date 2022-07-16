// Using the filter method, write a JavaScript function to clone an array
function cloneArray(array) {
    return array.filter(item => item);
}
console.log('Cloned array: ' + (cloneArray([1, 2, 3, 4, 5])));