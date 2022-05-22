var idade = 18;
var nome = "Ewerton";
var idadeMinima = 18;

if((idade >= idadeMinima) && (nome == "Ewerton")){
    console.log("Pode entrar na festa");
}
else if(idade >= 16 && idade <= 17){
    console.log("Precisa de altorizacao dos pais");
}
else{
    console.log("Nao pode entrar na festa");
}