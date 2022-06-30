const cars = ["bmw", "ferrari", "vw", "paganni"];
cars.sort();
print(cars);
cars.reverse();
print(cars);

const points = [40, 123, 44, 62, 70];
function p(a, b){
    return a - b;
}
print(points.sort(p));

print(points[0]); // min value
print(points[points.length - 1]); // max value


// Sorting an array in random order
function fuu(a,b){
    return 0.5 - Math.random();
}
print(points.sort(fuu));

for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = points[i]
    points[i] = points[j]
    points[j] = k
}
print(points);

// Sorting descending
function p(a, b){
    return b - a;
}
print(points.sort(p));

// Math.max()
print(Math.max.apply(null, points));
print(Math.min.apply(null, points));