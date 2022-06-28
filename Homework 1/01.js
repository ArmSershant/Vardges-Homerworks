// Find the value that is not being repeated inside the given array.
// Գտնել այն արժեքը որը ընհանրապես չի կրկնվում տրված զանգվածում
// Օրինակ։ ["a", "a", "b", "a"] //Պատասխան։ 'b' d

var arr = ['a','a','b','a'];
var n = arr.length;
var result = [];

function notRepeatingElem() {
  for (var i = 0; i < n; i++) {
    for (var j = 0 ; j < n; j++)
      if (i != j && arr[i] == arr[j])
        break;
    if(j == n)
        result.push(arr[i]);
  }
  return result;
}
console.log(notRepeatingElem())