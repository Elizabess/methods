export class Character {
    constructor(level = 1, attack = 10, defence = 5, health = 100) {
        this.level = level;
        this.attack = attack;
        this.defence = defence;
        this.health = health;
    }

    levelUp() {
        if (this.health <= 0) {
            throw new Error("Нельзя повысить левел умершего");
        }
        this.level += 1;
        this.attack *= 1.2; 
        this.defence *= 1.2;
        this.health = 100; 
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0; 
        }
    }
}

export default Character;