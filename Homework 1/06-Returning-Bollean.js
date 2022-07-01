// Write a function that accepts 2 array arguments and returns a boolean value - Does the first array contain all elements represented in the second array.
// Ստեղծել ֆունկցիա որը ստանում է 2 զանգված և վերադարձնում boolean - ստուգելով արդյոք առաջին զանգվածը պարունակում է 2-րդ զանգվածի բոլոր անդամները
function containsAll() {
    let arr1 = ["dog", "cat", "parrot"];
    // let arr2 = ["lizard", "rat", "cat", "dog"]
    let arr2 = ["dog", "cat", "parrot"];
    let result = true;
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            result = false;
        }
    }
    console.log(result); 
}
containsAll();