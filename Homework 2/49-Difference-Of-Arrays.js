// Write a function to find the difference of two arrays
function diff(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
        newArr.push(arr1[i]);
        }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (arr1.indexOf(arr2[j]) === -1) {
        newArr.push(arr2[j]);
        }
    }
    console.log(newArr);
}
diff([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);