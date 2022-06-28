// Find the value that is not being repeated inside the given array.
// Գտնել այն արժեքը որը ընհանրապես չի կրկնվում տրված զանգվածում
// Օրինակ։ ["a", "a", "b", "a"] //Պատասխան։ 'b'

let arr = ['a','a','b','a'];
let result = [];

function notRepeatingElem() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0 ; j < arr.length; j++)
      if (i != j && arr[i] == arr[j])
        break;
    if(j == arr.length)
        result.push(arr[i]);
  }
  return result;
}
console.log(notRepeatingElem())