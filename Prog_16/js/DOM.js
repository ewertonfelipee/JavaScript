//  ALterando o DOM com um  loop for

var fruits = ["laranja", "maca", "Pera", 'Jaca'];

//var fruitsUl = document.createElement("ul");

var body = document.getElementsByTagName("body");

//console.log(body[0]);

body[0].appendChild(document.createElement("ul"));

var fruitsOnBody = document.getElementsByTagName("ul");

console.log(fruitsOnBody[0]);

for(var i = 0; i < fruits.length; i++){
    var liFor = document.createElement("li");

    var textLi = document.createTextNode(fruits[i]);

    liFor.appendChild(textLi);

    fruitsOnBody[0].appendChild(liFor);
}