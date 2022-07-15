// document.getElementById("imagem").src="img/WallpaperDog-20378952.jpg";
document.getElementById("demo").innerHTML = "Date: " + Date();
document.write("heyyyy");

function validateForm(){
  let x = document.forms["myForm"]["fname"].value;
  if(x == ""){
    alert("Name must be filled out");
    return false;
  }
}