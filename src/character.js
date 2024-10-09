export class Character {
    constructor(name, type, attack = 10, defence = 5, health = 100) {
        this.name = name;
        this.type = type;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
        this.health = health;
    }
  
    levelUp() {
        if (this.health <= 0) {
            throw new Error('Нельзя повысить уровень, если здоровье меньше или равно 0');
        }
        this.level += 1;
        this.attack *= 1.2; 
        this.defence *= 1.2;
        this.health = 100; 
    } 

    damage(points) {
        if (points < 0) {
            throw new Error('Урон не может быть отрицательным');
        }
        this.health = Math.max(this.health - points, 0);
    }
}

export default Character;
