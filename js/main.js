document.getElementById("mainTitle").innerText = "Point and Click adventure game";
// Game State
let gameState = {
    "inventory": [],
    "coinPickedUp": false
}

function runGame() {
    //Game window reference
    const gameWindow = document.getElementById("gameWindow");
    const inventoryList = document.getElementById("inventoryList");
    const sec = 1000;

    //Main Character
    const mainCharacter = document.getElementById("hero");
    const offsetCharacter = 16;
    
    //speech bubbles
    const heroSpeech = document.getElementById("heroSpeech");
    const counsterSpeech = document.getElementById("counterSpeech");

    //Objects
    const tree1 = document.getElementById("squareTree");

    gameWindow.onclick = function (e) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        //TODO: calc offset based on character size
        //TODO: making dialog functionality

        if (e.target.id !== "heroImage") {
            mainCharacter.style.left = x - offsetCharacter + "px";
            mainCharacter.style.top = y - offsetCharacter + "px";
        }

        switch (e.target.id) {
            case "key":
                console.log("pick up key")
                document.getElementById("key").remove();
                changeInventory('key', "add");
                break;
            case "well":
                if (gameState.coinPickedUp == false) {
                    changeInventory("coin", "add");
                    gameState.coinPickedUp = true;
                } else {
                    console.log("There are no more coins in this well!");
                }
                break;
            case "doorWizardHut":
                if (checkItem("key")) {
                    showMessage(heroSpeech,"I opened the door. Yeah!");
                    console.log("I opened the door. Yeah!");
                } else if (checkItem("coin")) {
                    changeInventory("coin", "remove");
                    showMessage(heroSpeech,"Oh no I lost the coin and it didn't open the door.. Feel kinda stupid..");
                    console.log("Oh no I lost the coin and it didn't open the door.. Feel kinda stupid..");
                } else {
                    showMessage(heroSpeech,"Fuck this door is locked and I don't have a key. boohoo :(");
                    console.log("Fuck this door is locked and I don't have a key. boohoo :(");
                }
                break;
            case "statue":
                showMessage(heroSpeech,"hey you.. wanna know where the key is? It's by the graves.");
                console.log("hey you.. wanna know where the key is? It's by the graves.");
                break;
            default:
                break;
        }
    }

    /**
     * Add or remove item in inventory
     * @param {string} itemName 
     * @param {string} action 
     */
    function changeInventory(itemName, action) {
        if (itemName == null || action == null) {
            console.error("Wrong parameters given to changeInventory()");
            return;
        }

        switch (action) {
            case 'add':
                gameState.inventory.push(itemName);
                break;
            case 'remove':
                gameState.inventory = gameState.inventory.filter(function (newInventory) {
                    return newInventory !== itemName;
                });
                document.getElementById("inv-" + itemName).remove();
                break;

        }
        updateInventory(gameState.inventory, inventoryList);
    }

    /**
     * This returns string value if it exist within the array
     * @param {string} itemName 
     * @returns 
     */
    function checkItem(itemName) {
        return gameState.inventory.includes(itemName);
    }

    function updateInventory(inventory, inventoryList) {
        inventoryList.innerHTML = '';
        inventory.forEach(function (item) {
            const inventoryItem = document.createElement("li");
            inventoryItem.id = 'inv-' + item;
            inventoryItem.innerText = item;
            inventoryList.appendChild(inventoryItem);
        })
    }

    /**
     * It will show dialog.
     * @param {getElementById} targetBubble 
     * @param {string} message 
     */
    function showMessage(targetBubble, message){
        targetBubble.innerText = message;
        targetBubble.style.opacity = 1;
        setTimeout(hideMessage,4* sec,targetBubble);
    }

    function hideMessage(targetBubble){
        targetBubble.innerText = "...";
        targetBubble.style.opacity = 0;
    }
    
}

runGame();