var weaponList = []


class Player{

    constructor(name,weapon){
        this.name = name;
        this.items = [];
        this.weapons = [];
        this.maxHealth = 100;
        this.health = 100;
        this.speed = 10;
        this.level = 1;
        this.mainWeapon = weapon;
        this.secondary = null;
        this.weapons.push(this.mainWeapon);
    }

    addWeapon(weapon){
        this.weapons.push(weapon);
        if(this.weapons.length==2){
            this.secondary = this.weapons[1];
        }
    }
}


class Enemy{
    constructor(name, weapon, secondary, level){
        this.name = name;
        this.weapon = weapon;
        this.secondary = secondary;
        this.level = level;
        this.health = randint(30,100)*this.level;
        this.speed = randint(10,20)/this.level;
    }


}

class Weapon{

    constructor(name, strength, speed, level, type){
        this.name = name;
        this.strength = strength;
        this.speed = speed;
        this.level = level;
        this.type = type;

    }

}

function randint(min,max){
    return Math.floor(min+(Math.random()*(max-min)))
}

function createOptions(options){
    var actions = document.getElementById('actions');
    actions.innerHTML = "";
    for(var i = 0; i<options.length; i++){
        actions.innerHTML = actions.innerHTML+"<button onclick='doshit(\""+options[i]+"\")'>"+options[i]+"</button>";
        // console.log("<button onclick='doshit('"+options[i]+"')'>"+options[i]+"</button>");
     }
}

// function createWeapon(name, strength, level, type){
//     var txtFile = "Weapons/"+name+".txt";
//     console.log(txtFile)
//     weapon = new Weapon(name, strength, level, type);
//     var file = new File(txtFile);
//     file.open("w");
//     file.writeln(weapon)
//     file.close();
// }

function doshit(name){
    document.getElementById("sceneContainer").style.background = name;
}

function addWeapons(){
    var l = [{

        "name": "Sword",
        "strength": 40,
        "speed": 10,
        "level": 1,
        "type": "Slicy",
    },
    {

        "name": "Hammer",
        "strength": 30,
        "speed": 20,
        "level": 1,
        "type": "Smashy",
    },
    {

        "name": "Dagger",
        "strength": 30,
        "speed": 3,
        "level": 1,
        "type": "Stabby",
    },
    {

        "name": "Sheild",
        "strength": 30,
        "speed": 10,
        "level": 1,
        "type": "Blocky",
    }];

    for(var i = 0; i<l.length; i++){
        weaponList.push(new Weapon(l[i].name,l[i].strength,l[i].speed,l[i].level,l[i].type));
    }
}


function updateInv(player){
    inv = document.getElementById("inv");
    items = player.weapons;
    inv.innerHTML = "<h1>Inventory</h1>";
    for(var i = 0; i<items.length; i++){
        inv.innerHTML+=`
        <div class="item">
            <h1>`+ items[i].name + `</h1>
            <ul>
                <li><strong>Strength:</strong><span>` + items[i].strength + `</span></li>
                <li><strong>Speed:</strong><span>` + items[i].speed + `</span></li>
                <li><strong>Level:</strong><span>` + items[i].level + `</span></li>
                <li><strong>Type:</strong><span>` + items[i].type + `</span></li>
            </ul>
        </div>
        `;
    }
}



function genWeapon(name,level){
    types = ["Slicy","Smashy","Stabby","Blocky"];
    return new Weapon(name, randint(10,30), randint(3,10), level, types[randint(0,types.length)]);
}


function genEnemy(player){
    enemyMain = genWeapon("main",player.level+randint(-1,2));
    enemySecond = genWeapon("second",player.level+randint(-1,2));
    enemy = new Enemy("john",enemyMain,enemySecond,player.level+randint(-1,2));
    return enemy;
}

function battle(player){
    enemy = genEnemy(player);
    container = document.getElementById("imgContainer");
    container.innerHTML = "<h1>"+enemy.name+"</h1>"
    container.innerHTML += "<h2><strong>Level: </strong>"+enemy.level+"</h2>"
    container.innerHTML += `<div style='border: 1px black solid; width: 200px; border-radius:20px; text-align:center;'>
    <h2>`+enemy.weapon.name+`</h2>
    <p><strong>Strength:</strong> `+enemy.weapon.strength+`</p>
    <p><strong>Speed:</strong> `+enemy.weapon.speed+`</p>
    <p><strong>Level:</strong> `+enemy.weapon.level+`</p>
    <p><strong>Type:</strong> `+enemy.weapon.type+`</p>
    `;

    container.innerHTML += `<div style='border: 1px black solid; width: 200px; border-radius:20px; text-align:center;'>
    <h2>`+enemy.secondary.name+`</h2>
    <p><strong>Strength:</strong> `+enemy.secondary.strength+`</p>
    <p><strong>Speed:</strong> `+enemy.secondary.speed+`</p>
    <p><strong>Level:</strong> `+enemy.secondary.level+`</p>
    <p><strong>Type:</strong> `+enemy.secondary.type+`</p>
    `

}
addWeapons();



player = new Player("billy",weaponList[0]);


player.addWeapon(weaponList[2]);

updateInv(player);
// battle(player);


createOptions(["red","blue","green","yellow"]);
