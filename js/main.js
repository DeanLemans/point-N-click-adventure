alert("Go Fuck Yourself!");

document.getElementById("mainTitle").innerText = "Point N Click Adventure";

//gameWindow
const gameWindow = document.getElementById("gameWindow");

//Inventory
const inventoryList = document.getElementById("inventoryBox");
let inventory = [];
console.log(inventory);
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
            case "well":
                getItem("coin", "coin")
                break;
                case "doorWizardHut":
                    if (checkItem("Rusty key")) {
                        console.log("I opened the door. Yeah!");
                    } else if (checkItem("Coin")) {
                        removeItem("Coin", "coin")
                        console.log("Oh no I lost the coin and it didn't open the door.. Feel kinda stupid..");
                    } else {
                        console.log("Fuck this door is locked and I don't have a key. boohoo :(");
                    }
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
            inventory.push(itemName);
            showItem(itemName, itemId);
        }
        console.log(inventory);
    }


    function checkItem(itemName){
        return inventory.includes(itemName);
    }


    /**
     * needs a name for displaying item and a html id namea
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


    function removeItem(itemName, itemId){
        inventory = inventory.filter(function(newInventory){
            return newInventory !== itemName;
        })
        document.getElementById(itemId).remove();
    }

}

