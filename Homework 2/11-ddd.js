// Create a function that will receive two collections of employees and adds the items of the second collection to the first collection. Use push method
let addEmployees = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1;
}
console.log(addEmployees([{ name: "John" }],[{ name: "Jane" }]));
