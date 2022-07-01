// Create a function that will reverse the given string.
// Ստեղծել ֆունկցիա որը դասավորում է տողը հակառակ հերթականությամբ։
function reverseString(str) {
    str = 'Vardges'
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        newStr = str[i] + newStr;
    }
    console.log(newStr);
}
reverseString();