// Using the map, write a function to clone an array
function cloneArray(arr) {
    return arr.map(item => item);
}
console.log('Cloned array: '+ (cloneArray([1, 2, 3, 4, 5])));