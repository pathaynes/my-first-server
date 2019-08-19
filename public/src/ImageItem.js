import Component from './component/component.js';

class PokemonItems extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`
  <li>
      <img src="${pokemon.url_image}">
      <h1>Name: ${pokemon.pokemon}</h1>
      <h2>Type: ${pokemon.type_1}</h2>
      <h2>Attack: ${pokemon.attack}</h2>
  </li>
  `;
    }
}
export default PokemonItems;