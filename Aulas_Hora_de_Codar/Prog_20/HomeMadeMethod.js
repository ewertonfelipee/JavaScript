//  This function loops through an array comparing each value with the highest value found:
const arr = [23, 15, 100, 43, 70];
function myArrayMax(arr){
    let len = arr.length;
    let max = -Infinity;
    while(len--){
        if(arr[len] > max){
            max = arr[len];
        }
    }
    return max;
}

print(myArrayMax(arr));

//  /  This function loops through an array comparing each value with the lowest value found:
function myArrayMin(arr){
    let lenmin = arr.length;
    let min = Infinity;
    while(lenmin--){
        if(arr[lenmin] < min){
            min = arr[lenmin];
        }
    }
    return min;
}

print(myArrayMin(arr));