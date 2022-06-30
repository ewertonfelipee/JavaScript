// Selecionar elemento

const title = document.querySelector("#title");

// innerHTML
title.innerHTML = "testando o texto alterado";

// textContent -> mais utilizado e recomendado
const subtitle = document.querySelector(".subtitle");
subtitle.textContent = "testando o textContent";
//console.log(subtitle);