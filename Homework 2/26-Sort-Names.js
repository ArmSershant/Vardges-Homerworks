// Using sort, Write a JavaScript function to sort the collection of employees by their name 
function sortNames(arr) {
    console.log(arr.sort((a, b) => a.name > b.name ? 1 : -1));
}
sortNames(['John', 'Jane', 'Mary', 'Mark', 'Alice', 'Bob']);