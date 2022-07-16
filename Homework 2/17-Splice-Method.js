// Using the splice method, write a function that will fill the missing numbers of a sorted array of numbers, to make it consecutive. Example: [1,2,3,6] should become [1,2,3,4,5,6]
function fillMissingNumbers(arr) {
    let missingNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            missingNumbers.push(arr[i] + 1);
        }
    }
    console.log(missingNumbers);
}
fillMissingNumbers([1, 2, 3, 5]);
