var weaponList = []


class Player{

    constructor(name,weapon){
        this.name = name;
        this.items = [];
        this.weapons = [];
        this.maxHealth = 100;
        this.health = 100;
        this.level = 1;
        this.mainWeapon = weapon;
        this.weapons.push(this.mainWeapon);
    }

    addWeapon(weapon){
        this.weapons.push(weapon);
    }
}


// class Enemy{
//
//
// }

class Weapon{

    constructor(name, strength, level, type){
        this.name = name;
        this.strength = strength;
        this.level = level;
        this.type = type;

    }

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
    console.log("Shit has been done by "+name);
}

function addWeapons(){
    var l = [{

        "name": "sword",
        "strength": 40,
        "level": 1,
        "type": "stabby",
    },
    {

        "name": "hammer",
        "strength": 30,
        "level": 2,
        "type": "blunt",
    }];

    for(var i = 0; i<l.length; i++){
        weaponList.push(new Weapon(l[i].name,l[i].strength,l[i].level,l[i].type));
    }
}

addWeapons();
for(var i = 0; i<weaponList.length; i++){
    console.log(weaponList[i].name);
}


player = new Player("billy",weaponList[0]);
console.log(player.mainWeapon.name);


createOptions(["button1","button2","button3","button4"]);
