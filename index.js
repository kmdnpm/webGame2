

function newImage(url, left, bottom) {
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom) {
    let item = newImage(url, left, bottom)
    item.addEventListener('click', function () {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url
        inventory.append(inventoryItem)
    })
}


function newInventory() {
    let inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
}

function moveCharacter() {
    const character = newImage('assets/green-character/static.gif')
    let direction = null;
    let x = 100;
    let y = 250;

    setInterval(function () {
        if (direction === 'west') {
            x = x - 1;
        }

        if (direction === 'north') {
            y = y + 1;
        }

        if (direction === 'south') {
            y = y - 1;
        }

        if (direction === 'east') {
            x = x + 1;
        }
        character.style.left = x + 'px';
        character.style.bottom = y + 'px'

        move(character).to(100, 250)
    }, 1)
}


setInterval(moveCharacter(), 1)

function index() {

}
newInventory()
newImage('assets/green-character.gif', 100, 250)
newImage('assets/tree.png', 200, 450)
newImage('assets/pillar.png', 350, 250)
newImage('assets/pine-tree.png', 450, 350)
newImage('assets/crate.png', 150, 350)
newImage('assets/well.png', 500, 575)

newItem('assets/sword.png', 500, 555)
newItem('assets/shield.png', 165, 335)
newItem('assets/staff.png', 600, 250)