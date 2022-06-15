function printe(num){
    print("A operacao resultou em: " + num);
}

function soma(a, b, callback){
    let sum =  a + b;
    callback(sum);
    
}

function multi(a, b, callback){
    let mult = a * b;
    callback(mult);
}

soma(10, 20, printe);

multi(10,20, printe);