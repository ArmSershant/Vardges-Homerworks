// Write a function which is checking if a given element contains inside an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function check(element) {
    arr.indexOf(element) !== -1 ? console.log(true) : console.log(false);
};
check(5);