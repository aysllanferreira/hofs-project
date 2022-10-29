const findWarrior = require('../exercicios/findWarrior');

describe('Exercicio 4', () => {
  it('Encontrando guerreiro por ID', () => {
    expect(findWarrior('c81e728d9d4c2f636f067f89cc14862c')).toBe('Vegeta');
  })
  it('Encontrando guerreiro por Nome', () => {
    expect(findWarrior('Gohan')).toBe('Gohan');
  })
  it('Retorne Nenhum guerreiro encontrado se nao for passado parametro ou nao encontrar o guerreiro', () => {
    expect(findWarrior('Tenshinhan')).toBe('Nenhum guerreiro encontrado');
  })
});