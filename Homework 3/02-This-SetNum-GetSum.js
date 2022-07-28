// Create an object and methods to support the following functionality 
const obj = {num: 0,};
obj.setSum = function(num){
    this.num += num;
}
obj.add = function(num){
    this.setSum(num);
}
obj.getSum = function(){
    return this.num;
}
obj.setSum(10);
obj.add(20);
console.log(obj.getSum());
obj.setSum(100);
console.log(obj.getSum());
// obj.setSum(10);  
// obj.add(20);  
// console.log(obj.getSum()); // Should log 30, 10 + 20 = 30
// obj.setSum(100);
// console.log(obj.getSum()); // Should log 100,  the sum was set to 100