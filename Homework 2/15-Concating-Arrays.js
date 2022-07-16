// Using concat compute the union of two arrays and then remove all duplicated items if they exist
function concat(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  return newArr.filter(function(item, index, array) {
    return array.indexOf(item) === index;
  });
}
console.log(concat([1, 2, 3], [4, 5, 6]));
console.log(concat([1, 2, 3], [4, 5, 2]));