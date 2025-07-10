"use strict";
;
class Weapon {
    constructor(name, weight, rarity, damage) {
        this.name = name;
        this.weight = weight;
        this.rarity = rarity;
        this.damage = damage;
    }
    ;
    use() {
        console.log(`${this.name} used!`);
    }
}
;
class Potion {
    constructor(name, weight, rarity, restoreHP, restoreST) {
        this.name = name;
        this.weight = weight;
        this.rarity = rarity;
        this.restoreHP = restoreHP;
        this.restoreST = restoreST;
    }
    ;
    use() {
        console.log(`${this.name} used!`);
    }
}
;
class Armor {
    constructor(name, weight, rarity, defense, material = 'Iron') {
        this.name = name;
        this.weight = weight;
        this.rarity = rarity;
        this.defense = defense;
        this.material = material;
    }
    ;
    use() {
        console.log(`${this.name} used!`);
    }
}
;
class Inventory {
    constructor() {
        this.items = [];
        this.weight = 0;
    }
    addItem(item) {
        this.items.push(...item);
    }
    ;
    listItems() {
        this.items.forEach(idx => console.log(idx));
    }
    ;
    calculateWeight() {
        this.items.map(item => this.weight += item.weight);
    }
    ;
    get weightInfo() {
        return this.weight;
    }
    ;
}
const weapon1 = new Weapon('Long Sword', 10.0, 'rare', 32);
const weapon2 = new Weapon('Spear', 7.3, 'legendary', 41);
const heal_potion = new Potion('Large heal potion', 1.2, 'common', 15);
const heal_stamina_potion = new Potion('Large heal and stamina potion', 1.4, 'legendary', 23, 14);
const armor1 = new Armor('Heavy armor', 33.2, 'rare', 15);
const armor2 = new Armor('Light armor', 15.2, 'legendary', 23);
const inventory1 = new Inventory();
inventory1.addItem([weapon1, weapon2, heal_potion, heal_stamina_potion, armor1, armor2]);
inventory1.listItems();
inventory1.calculateWeight();
console.log(inventory1.weightInfo);
