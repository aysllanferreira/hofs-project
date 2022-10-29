const findCharacterById = require('../exercicios/findCharacterById');

describe('Exercicio 1', () => {
  it('Encontre o personagem por ID', () => {
    expect(findCharacterById('eccbc87e4b5ce2fe28308fd9f2a7baf3')).toEqual(['O nome do personagem é Piccolo']);
  });

  it('Faca com que a funcao possa receber varios parametros.', () => {
    expect(findCharacterById('eccbc87e4b5ce2fe28308fd9f2a7baf3', '1679091c5a880faf6fb5e6087eb1b2dc')).toEqual(['O nome do personagem é Piccolo', 'O nome do personagem é Gohan']);
  });

  it('Se o parametro não for passado, retorne um array vazio.', () => {
    expect(findCharacterById()).toEqual([]);
  });
});
