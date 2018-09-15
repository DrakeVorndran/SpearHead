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


// class Enemy{
//
//
// }

class Weapon{

    constructor(name, strength, speed, level, type){
        this.name = name;
        this.strength = strength;
        this.speed = speed;
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
    document.getElementById("sceneContainer").style.background = name;
}

function addWeapons(){
    var l = [{

        "name": "sword",
        "strength": 40,
        "speed": 10,
        "level": 1,
        "type": "slicy",
    },
    {

        "name": "hammer",
        "strength": 30,
        "speed": 20,
        "level": 1,
        "type": "smashy",
    },
    {

        "name": "dagger",
        "strength": 30,
        "speed": 3,
        "level": 1,
        "type": "stabby",
    },
    {

        "name": "sheild",
        "strength": 30,
        "speed": 10,
        "level": 1,
        "type": "blocky",
    }];

    for(var i = 0; i<l.length; i++){
        weaponList.push(new Weapon(l[i].name,l[i].strength,l[i].speed,l[i].level,l[i].type));
    }
}




addWeapons();



player = new Player("billy",weaponList[0]);


player.addWeapon(weaponList[2]);

console.log(player.secondary.name);


createOptions(["red","blue","green","yellow"]);
