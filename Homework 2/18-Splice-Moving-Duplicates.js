// Using the splice method, create a function which is removing duplicated numbers from a sorted array of numbers
function removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            arr.splice(arr[i]);
        }
    }
    console.log(arr);
}
removeDuplicates([1,1,2,3,4])