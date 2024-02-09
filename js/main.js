alert("Go Fuck Yourself!");

document.getElementById("mainTitle").innerText = "Point N Click Adventure";

//gameWindow
const gameWindow = document.getElementById("gameWindow");

//mainCharacter
const mainCharacter = document.getElementById("hero");
const offsetCharacter = 16;

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    
    console.log("x is " + x + " and y is " +y);

    mainCharacter.style.left = x - mainCharacter.style.width/2 + "px";

    mainCharacter.style.top = y - mainCharacter.style.height/2 + "px";


}

