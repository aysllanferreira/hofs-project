const findWarriorByPlanet = require('../exercicios/ex04');

describe('Exercicio 5', () => {
  it('Encontrando guerreiro por planeta', () => {
    expect(findWarriorByPlanet('Planeta Vegeta')).toEqual([
      { nome: 'Goku', planeta: 'Planeta Vegeta' },
      { nome: 'Vegeta', planeta: 'Planeta Vegeta' },
    ]);
    expect(findWarriorByPlanet('Namekusei')).toEqual([
      { nome: 'Piccolo', planeta: 'Namekusei' },
    ]);
    expect(findWarriorByPlanet('Planeta Terra')).toBe('Nenhum guerreiro encontrado');
  })
});