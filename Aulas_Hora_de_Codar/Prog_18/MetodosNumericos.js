//  parseFloat
console.log(parseFloat("10.33"));

//  parseInt
console.log(parseInt("10.432"));
console.log(parseInt(10.432));

//  toFixed
console.log(23.05.toFixed(1));

//  MAX_VALUE and MIN_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// Converting Numbers to String() | String() method is equal toString()
const x = 10.35765;
console.log(x);
console.log(String(x));
console.log(String(123));
console.log(String(100+23));
console.log(x.toPrecision(7))
console.log(x.toExponential())

// Converting Dates to Numbers
d = new Date();
console.log(Number(d));
console.log(d.getTime());
console.log(String(Date()));


function dec2bin(dec){
    return (dec >>> 0).toString(2);
}
console.log(dec2bin(10));

function bin2dec(bin){
    return parseInt(bin, 2).toString(10);
}
console.log(bin2dec(1010));