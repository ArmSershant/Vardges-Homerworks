// From the given array of numbers create two arrays one containing only odd and the other only even numbers.
// Տրված թվային զանգվածից ստանալ երկու զանգվածներ, որոնցից մեկը կպարունակի միայն կենտ իսկ մյուսը միայն զույգ թվեր:
function oddEvenArrays(){
let arr = [14, 28, 3, 5, 8, 2];
let odd = [];
let even = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        even.push(arr[i]);
        // console.log(even);
    } else {
        odd.push(arr[i]);
        // console.log(odd);
    }
}
console.log(even, odd);
}
oddEvenArrays();