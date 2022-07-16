let palindromeArray = (arr) => {
  let isPalindrome = true;
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
};
console.log(
  "Is this array a palindrome?",
  palindromeArray(["a", "b", "c", "b", "a"]),
);
