// Write a function to return only unique values of the given array. 
// Ստեղծել ֆւնկցիա որը վերադարծնում է տրված զանգվածի միայն չկրկնվող անդամները։
function uniqueValues() {
    let arr = [14, 28, 3, 14, 5, 8, 2, 2, 28];
    let unique = [];
    let i = arr.length;
do {
unique.push(arr[i]);
} while (arr[i] !== arr[i-1]);
console.log(unique);
}
uniqueValues();

    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length; j++) {
    //         if (arr[j] !== arr[i]) {
    //             unique.push(arr[i]);
    //             console.log(unique);
    //             break;
    //         } else {
    //             console.log("There are no unique values in the array");
    //         }
    //     }
    // }