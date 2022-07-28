// Create an object and methods to support the following functionality 
// const obj = {}; 
const obj = {name : 'Alice', age : 30,}
obj.setName = function(name){
    this.name = name;
}
obj.getName = function(){
    return this.name;
}
obj.setName('John');
console.log(obj.getName()); // Should log ‘John’