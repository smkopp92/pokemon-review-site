import PokemonContainer from './../../src/containers/PokemonContainer';

describe('Pokemon Index', () => {
  let wrapper;

  beforeEach(() => {
    spyOn(global, 'fetch').and.returnValue(
      createResponseFromFixture('pokemon/pokemonIndex')
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('visiting the pokemon homepage', () => {
    beforeEach(() => {
      wrapper = mount(
        <PokemonContainer />
      );
    });

    it('has pokemon and their information', done => {
      setTimeout(() => {
        let pageText = wrapper.text();
        expect(pageText).toMatch('Horsea');
        expect(pageText).toMatch('Tentacruel');
        expect(pageText).toMatch('Water');
        expect(pageText).toMatch('Poison');
        done();
      },1000)
    });
  });
});
