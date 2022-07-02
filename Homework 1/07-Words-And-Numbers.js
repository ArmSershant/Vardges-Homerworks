function arrange() {
    let arr = [1,2,'cat',4,'dog'];
    let numbers = [];
    let strings = [];
    let number = 0;
    let string = '';
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == typeof number) {
            numbers.push(arr[i]);
        } else if (typeof arr[i] == typeof string) {
            strings.push(arr[i])
        }

        
    }
    console.log(numbers);
    console.log(strings);
}
arrange()