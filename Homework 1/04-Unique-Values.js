// Write a function to return only unique values of the given array. 
// Ստեղծել ֆւնկցիա որը վերադարծնում է տրված զանգվածի միայն չկրկնվող անդամները։
function getOnlyUnRepeated(arr) {
    const newArr = [];
    const repeatedValues = [];
    for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        } else {
            repeatedValues.push(arr[i]);
        }
    }
    for (let i = 0; i < repeatedValues.length; i++) {
        newArr.splice(newArr.indexOf(repeatedValues[i]), 1);
    }
    return newArr;
}

console.log(getOnlyUnRepeated([1, 2, 2, 3]));