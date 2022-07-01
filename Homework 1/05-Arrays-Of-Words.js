// Create a function that accepts 2 arrays of words and returns the common words from each.
// Գրել ֆունկցիա որը ստանում է 2 զանգված և վերադարձնում է նրանց ընդհանուր տարրերը։
// Օրինակ։ 
// arr1 ["dog", "cat", "parrot"] 
// arr2 ["lizard", "rat", "cat"] 
// Պատասխան։ ["cat"]
function commonWords() {
    let arr1 = ["dog", "cat", "parrot"];
    let arr2 = ["lizard", "rat", "cat", "dog"] 
    let common = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                common.push(arr1[i]);
            }
        }
    }
    console.log(common);
}
commonWords();