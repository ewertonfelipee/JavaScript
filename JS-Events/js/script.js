foo = id => {
  id.innerHTML = "foo function";
}

displayDate = () => {
  const elem = new Date();
  document.getElementById("demo").innerHTML = elem;
}