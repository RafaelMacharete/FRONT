type rarity = 'common' | 'rare' | 'legendary';
// type category = 'weapon' | 'potion' | 'armor' ----> Change to class

interface Item {
    name: string,
    weight: number,
    rarity: rarity,
};

class Weapon implements Item {

    constructor(
        public name: string,
        public weight: number,
        public readonly rarity: rarity,
        public damage: number
    ) { };

    use(): void {
        console.log(`${this.name} used!`);
    }
};

class Potion implements Item {
    
    constructor(
        public name: string,
        public weight: number,
        public readonly rarity: rarity,
        public restoreHP: number,
        public restoreST?: number
    ) { };
    
    use(): void {
        console.log(`${this.name} used!`);
    }
    
};

class Armor implements Item {
    
    constructor(
        public name: string,
        public weight: number,
        public readonly rarity: rarity,
        public defense: number,
        protected material: string = 'Iron'
    ) {};
    
    use(): void {
        console.log(`${this.name} used!`);
    }

};

type itemCategory = Weapon | Potion | Armor;

class Inventory {
    private items: itemCategory[] = [];

    private weight: number = 0;

    addItem(item: itemCategory[]) {
        this.items.push(...item);
    };

    listItems(): void {
        this.items.forEach(idx => console.log(idx));
    };

    calculateWeight(): void{
        this.items.map(item => this.weight += item.weight);
    }; 

    public get weightInfo(): number{
        return this.weight;
    };
}

const weapon1 = new Weapon('Long Sword', 10.0, 'rare', 32);
const weapon2 = new Weapon('Spear', 7.3, 'legendary', 41);

const heal_potion = new Potion('Large heal potion', 1.2, 'common', 15);
const heal_stamina_potion = new Potion('Large heal and stamina potion', 1.4, 'legendary', 23, 14);

const armor1 = new Armor('Heavy armor', 33.2, 'rare', 15);
const armor2 = new Armor('Light armor', 15.2, 'legendary', 23);

const inventory1 = new Inventory();
inventory1.addItem([weapon1, weapon2, heal_potion, heal_stamina_potion, armor1, armor2])
inventory1.listItems();
inventory1.calculateWeight();
console.log(inventory1.weightInfo);
