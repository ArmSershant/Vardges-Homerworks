// Using the constructor function create, an object and methods to support the following functionality
function Calculator () {
    this.num = 0;
    this.plus = function(num) {
        console.log(this.num += num);
    }
    this.minus = function(num) {
        console.log(this.num -= num);
    }
    this.multiply = function(num) {
        console.log(this.num *= num);
    }
    this.divide = function(num) {
        console.log(this.num /= num);
    }
    this.getResult = function() {
        console.log(this.num);
    }
}
const calculator = new Calculator(0);
calculator.plus(5);
calculator.minus(3);
calculator.multiply(3);
calculator.divide(2);
calculator.getResult();
// const calculator = new Calculator(0); // Initial result is 0 
// calculator.plus(5); // add 5 to the result 
// calculator.minus(3); // subtract 3 from result 
// calculator.multiply(3); // multiply result by 3
// calculator.divide(2); // divide result on 2
// calculator.getResult() // Returns the result
