const findWarriorsByRaceAndAge = require('../exercicios/ex05');

describe('Exercicio 2', () => {
  it('A funcao sem parametros deve retornar um objeto vazio.', () => {
    expect(findWarriorsByRaceAndAge()).toEqual({});
  });

  it('Se o guerreiro nao for encontrado, retorne Guerreiro nao encontrado!', () => {
    expect(findWarriorsByRaceAndAge('Saiyajinx', 100)).toEqual('Guerreiro nao encontrado!');
  })

  it('Se a idade for um numero negativo ou string, retorne Idade invalida!', () => {
    expect(findWarriorsByRaceAndAge('Namekuseijin', -1)).toEqual('Idade invalida!');
    expect(findWarriorsByRaceAndAge('Humano', '100')).toEqual('Idade invalida!');
  });

  it('Encontre todos os guerreiros da raca passada por parametro.', () => {
    expect(findWarriorsByRaceAndAge('Saiyajin', 100)).toEqual(false);
    expect(findWarriorsByRaceAndAge('Humano', 1)).toEqual(true);
  });
});