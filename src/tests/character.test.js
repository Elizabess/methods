import Character from '../character';

test('Уровень персонажа увеличивается корректно', () => {
    const character = new Character('Hero', 'warrior', 10, 5);
    character.levelUp();
    
    const correct = {
        name: 'Hero',
        type: 'warrior',
        level: 2,
        attack: 12,
        defence: 6,
        health: 100,
    };

    expect(character).toEqual(correct);
});

test('Метод damage корректно уменьшает здоровье', () => {
    const character = new Character('Hero', 'Mage', 100, 10);
    // character.defence = 10; 
    character.damage(50); 
    
    expect(character.health).toBe(50); 
});

test('Метод damage не позволяет здоровью стать отрицательным', () => {
    const character = new Character();
    character.damage(200); 
    
    expect(character.health).toBe(0); 
});

test('Персонаж не может повысить уровень с нулевым здоровьем', () => {
    const character = new Character('Hero', 'Mage', 100, 10);
    character.damage(100);
    expect(() => character.levelUp()).toThrow('Нельзя повысить уровень, если здоровье меньше или равно 0');
});

