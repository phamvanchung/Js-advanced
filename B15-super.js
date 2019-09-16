class Herro {
    constructor(name, hp, damage) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }
    applyDamage(damage) {
        this.hp -= damage;
    }
    attack(enemy) {
        enemy.applyDamage(this.damage);
    }
}


class RangeHerro extends Herro{
    constructor(name, hp, damage, range) {
        super(name, hp, damage);
        this.range = range;
    }
    attack(enemy) {
        super.attack(enemy);
        this.hp += this.damage;
    }
}

const herroA = new RangeHerro('truong', 100, 10);
const herroB = new Herro('tien', 200, 5);
console.log({ herroA, herroB });
herroA.attack(herroB);
console.log({ herroA, herroB });