const findYoungestWarrior = require('../exercicios/findYoungestWarrior');

describe('findYoungestWarrior teste', () => {
  it('Deve retornar o nome do guerreiro mais jovem.', () => {
    expect(findYoungestWarrior()).toEqual('Gohan');
  });
});