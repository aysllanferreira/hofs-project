const findWarrior = require('../exercicios/ex02');

describe('Exercicio 4', () => {
  it('Encontrando guerreiro por ID ou nome', () => {
    expect(findWarrior('c81e728d9d4c2f636f067f89cc14862c')).toBe('Vegeta');
    expect(findWarrior('Gohan')).toBe('Gohan');
    expect(findWarrior('Tenshinhan')).toBe('Nenhum guerreiro encontrado');
  })
});