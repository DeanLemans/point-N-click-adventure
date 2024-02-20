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
                getItem("Rusty key", "rustyKey")
                break;
        default:
            tree1.style.opacity = 1;

    }
    /**
     * checks if the value exist within the array
     * if not then it adds value to the array and use showItem function
     * @param {*} itemName 
     * @param {*} itemId 
     */
    function getItem(itemName, itemId){
        if(!checkItem(itemName)){
            inventorypush(itemName);
            showItem(itemName, itemId);
        }
        showItem("Rusty Key", "rustyKey");
    }

    function checkItem(itemId){
        return inventoryList.includes(itemName);
    }
    /**
     * 
     * @param {*} itemName 
     * @param {*} itemId 
     */
    function showItem(itemName, itemId){
        console.log('You\'ve found a key!' + itemName,'!');
       
        const keyElement = document.createElement("li");            
        keyElement.id = itemId;                
        keyElement.innerText = itemName;
        inventoryList.appendChild(keyElement);
    }


}

