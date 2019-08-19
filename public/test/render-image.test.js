import renderImage from '../src/render-image.js';

const test = QUnit.test;

QUnit.module('Render Images');

test('testing render images', assert => {
    // arrange
    const pokemon = {
        pokemon: 'venusaur',
        type_1: 'grass',
        attack: 82,
        url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
    };

    const expected = /*html*/`
    <li>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png">
      <h1>Name: venusaur</h1>
      <h2>Type: grass</h2>
      <h2>Attack: 82</h2>
    </li>`;

    // act
    const html = renderImage(pokemon);
    
    // assert
    assert.htmlEqual(html, expected);
});