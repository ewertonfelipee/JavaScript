// mouseover
const title = document.querySelector("#title");

title.addEventListener("mouseover", function(){

    this.style.backgroundColor = "blue";
});

// mouseout

title.addEventListener("mouseout", function(){

    this.style.backgroundColor = "white";
});

// afetar o elemento com o mouseover
const subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function(){

    const legenda = document.querySelector("#legenda");

    legenda.classList.remove("hide");

});

subtitle.addEventListener("mouseout", function(){

    const legenda = document.querySelector("#legenda");

    legenda.classList.add("hide");

});


