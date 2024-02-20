alert("Go Fuck Yourself!");

document.getElementById("mainTitle").innerText = "Point N Click Adventure";

//gameWindow
const gameWindow = document.getElementById("gameWindow");

//Inventory
const inventoryList = document.getElementById("inventoryBox");
//Main Character
const mainCharacter = document.getElementById("hero");
const offsetCharacter = 16;
const tree1 = document.getElementById("squareTree");

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    
    //console.log("x is " + x + " and y is " +y);

    if (e.target.id !== "heroImage")
    {
        mainCharacter.style.left = x - mainCharacter.style.width/2 + "px";
        mainCharacter.style.top = y - mainCharacter.style.height/2 + "px";
    }

    switch (e.target.id)
    {
        case "squareTree":
            tree1.style.opacity = 0.5;
            break;
            case "key":
                
                break;
        default:
            tree1.style.opacity = 1;

    }

    function getItem(itemName, itemId){
        showItem("Rusty Key", "rustyKey");
    }

    function checkItem(itemId){

    }
    
    function showItem(itemName, itemId){
        console.log('You\'ve found a key!' + itemName,'!');
       
        const keyElement = document.createElement("li");            
        keyElement.id = itemId;                
        keyElement.innerText = itemName;
        inventoryList.appendChild(keyElement);
    }


}

