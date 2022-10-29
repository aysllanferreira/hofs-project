const findByPlanet = require('../exercicios/findByPlanet');

describe('FindByPlanet teste:', () => {
  it('Encontrando guerreiro por planeta', () => {
    expect(findByPlanet('Planeta Vegeta')).toEqual([
      { nome: 'Goku', planeta: 'Planeta Vegeta' },
      { nome: 'Vegeta', planeta: 'Planeta Vegeta' },
    ]);
    expect(findByPlanet('Namekusei')).toEqual([
      { nome: 'Piccolo', planeta: 'Namekusei' },
    ]);
  });
  it('Retorne Nenhum guerreiro encontrado se nao for passado parametro ou nao encontrar o guerreiro', () => {
    expect(findByPlanet('Planeta Terra')).toBe('Nenhum guerreiro encontrado');
  });
});
