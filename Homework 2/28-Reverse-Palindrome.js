// Using reverse, write a function that checks if the string is a palindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome('madam'));