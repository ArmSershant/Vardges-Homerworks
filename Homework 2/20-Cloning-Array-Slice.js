// Using slice, write a JavaScript function to clone an array
function cloneArray(arr) {
    let newArray = arr.slice();
    console.log('Cloned Array: ', newArray);
}
cloneArray([1, 2, 3, 4, 5]);