// Find the min and the max number from the supplied numeric array. Return an array containing these arr։
// Գտնել զանգվածի ամենափոքր և ամենամեծ տարրերը և վերադարձնել նոր զանգվածի մեջ։ 
// Օրինակ։ [14, 28, 3, 8, 2] //Պատասխան։ [2, 28];
function maxMinOfArray() {
    arr = [14, 28, 3, 8, 2]
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      } 
    }
      console.log(max);
      console.log(min);
}
console.log(maxMinOfArray());