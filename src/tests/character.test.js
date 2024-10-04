import Character from '../character';

describe('Character', () => {
    let character;

    beforeEach(() => {
        character = new Character();
    });

    test('levelUp повышение уровня', () => {
        character.levelUp();
        expect(character.level).toBe(2);
    });

    test('Повышение защиты и уровня атаки на 20%', () => {
        const initialAttack = character.attack;
        const initialDefence = character.defence;
        
        character.levelUp();
        
        expect(character.attack).toBe(initialAttack * 1.2);
        expect(character.defence).toBe(initialDefence * 1.2);
    });

    test('Здоровье 100%', () => {
        character.health = 50;
        character.levelUp();
        expect(character.health).toBe(100);
    });

    test('Error: нет здоровья', () => {
        character.health = 0;
        expect(() => character.levelUp()).toThrow("Нельзя повысить левел умершего");
    });

    test('Снижение здоровья', () => {
        const initialHealth = character.health;
        character.damage(10);
        
        const expectedHealth = initialHealth - (10 * (1 - character.defence / 100));
        expect(character.health).toBe(expectedHealth);
    });

    test('Здоровье не падает ниже 0', () => {
        character.health = 5;
        character.damage(10);
        expect(character.health).toBe(0);
    });
});
