import Component from './component/component.js';

class FilterPokemon extends Component {
    
    onRender(select) {
        const onFilter = this.props.onFilter;
        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }

    renderHTML() {
        const pokemon = this.props.pokemon;
        const types = getUniqueTypes(pokemon);
        const optionsHTML = renderOptionsHTML(types);

        return /*html*/`
          <select id="search-sort">
            <option value="all">ALL</option>
            ${optionsHTML}
          </select>
        `;
    } 
}


function getUniqueTypes(pokemon) {
    const attackArray = [];
    pokemon.forEach(poke => {
        if(!attackArray.includes(poke.attack)) {
            attackArray.push(poke.attack);
        }
    });
    attackArray.sort();
    return attackArray;
}

function renderOptionsHTML(attack) {
    const optionsArray = attack.map(attack => {
        return /*html*/`
        <option value="${attack}">${attack}</option>
        `;
    });
    return optionsArray.join('');
}

export default FilterPokemon;