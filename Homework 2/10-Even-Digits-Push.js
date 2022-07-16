// Create a function that is receiving a number and returns an array which is containing all even digits. Use push method
let evenDigits = (num) => {
  let arr = [];
  while (num > 0) {
    if (num % 2 === 0) {
      arr.push(num % 10);
    }
    num = Math.floor(num / 10);
  }
  return arr;
}
console.log(evenDigits(1234));