// Write a function that will receive the length and the value and will return a pre-filled array
function array(length, value) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(value);
    }
    console.log(arr);
}
array(10, "Hello");