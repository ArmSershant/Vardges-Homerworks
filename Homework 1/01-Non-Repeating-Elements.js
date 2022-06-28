// Find the value that is not being repeated inside the given array.
// Գտնել այն արժեքը որը ընհանրապես չի կրկնվում տրված զանգվածում
// Օրինակ։ ["a", "a", "b", "a"] //Պատասխան։ 'b'


let arr = ['a','a','b','a'];
let length = arr.length;
let i,j;
let result = '';
function nonRepeatingElem() {
  for (i = 0; i < length; i++) {
    for ( j = 0 ; j < length; j++) {
      if (i != j && arr[i] == arr[j]) {
        break;
      };
    };
    if(j == length)
        result = arr[i];
  };
  return result;
};
console.log(nonRepeatingElem())