const findByRaceAndAge = require('../exercicios/findByRaceAndAge');

describe('findByRaceAndAge Teste', () => {
  it('A funcao sem parametros deve retornar um objeto vazio.', () => {
    expect(findByRaceAndAge()).toEqual({});
  });

  it('Se o guerreiro nao for encontrado, retorne Guerreiro nao encontrado!', () => {
    expect(findByRaceAndAge('Saiyajinx', 100)).toEqual('Guerreiro não encontrado!');
  })

  it('Se a idade for um numero negativo ou string, retorne Idade invalida!', () => {
    expect(findByRaceAndAge('Namekuseijin', -1)).toEqual('Idade invalida!');
    expect(findByRaceAndAge('Humano', '100')).toEqual('Idade invalida!');
  });

  it('Encontre todos os guerreiros da raca passada por parametro.', () => {
    expect(findByRaceAndAge('Saiyajin', 100)).toEqual(false);
    expect(findByRaceAndAge('Humano', 1)).toEqual(true);
  });
});