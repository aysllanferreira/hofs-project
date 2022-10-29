const findYoungestWarrior = require('../exercicios/findYoungestWarrior');

describe('Exercicio 3', () => {
  it('Deve retornar o nome do guerreiro mais jovem.', () => {
    expect(findYoungestWarrior()).toEqual('Gohan');
  });
});