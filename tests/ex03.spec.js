const findYoungestWarrior = require('../exercicios/ex03');

describe('Exercicio 3', () => {
  it('Deve retornar o nome do guerreiro mais jovem.', () => {
    expect(findYoungestWarrior()).toEqual('Gohan');
  });
});