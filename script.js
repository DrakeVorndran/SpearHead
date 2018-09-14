class player{

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
        this.weapons.push(weapon)
    }
}


class Weapon{

    constructor(name, strength, level, type){
        this.name = name;
        this.strength = strength;
        this.level = level;
        this.type = type;

    }

}

function createWeapon(name, strength, level, type){
    var txtFile = "Weapons/"+name+".txt";
    console.log(txtFile)
    weapon = new Weapon(name, strength, level, type);
    var file = new File(txtFile);
    file.open("w");
    file.writeln(weapon)
    file.close();
}

// createWeapon(prompt("name"),prompt("strength"),prompt("level"),prompt("type"))
