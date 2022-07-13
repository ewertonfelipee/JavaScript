//  Callback function
//  Sequence control
function myDisplay(x) {
    console.log(x);
}

function myCalc(num1, num2){
    let sum = num1 + num2;
    return sum;
}

let result = myCalc(4,5);
myDisplay(result);

//  using callback
function myDisplay2(x) {
    console.log(x);
}
function myCalc2(num1, num2, Callback){
    let sum = num1 + num2;
    Callback(sum);
}
myCalc2(4,5, myDisplay2);