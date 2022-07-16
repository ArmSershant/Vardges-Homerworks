// Using from, write a JavaScript function to clone an array
function clone() {
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [];
    let clonedArr = arr2.from(arr1);
    console.log(clonedArr);
}
clone();