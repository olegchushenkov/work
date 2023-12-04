var buttons = document.querySelectorAll("button");
var screen = document.querySelector("#screen");
var screenValue = "";
for (item of buttons) {
item.addEventListener("click", (e) => {
console.log(e)
buttonText = e.target.innerText;
if (buttonText == "X") {
buttonText = "*";
screenValue += buttonText;
screen.value = screenValue;
}
else if(buttonText == "C"){
screenValue = "";
screen.value = screenValue;
}
else if(buttonText == "="){
try{
if(screenValue == ""){
screen.value = ""
}
else{
screen.value = eval(screenValue);
}
}
catch{
screen.value = "ERROR";
}
}
else {
screenValue += buttonText;
screen.value = screenValue;
}
});
}
