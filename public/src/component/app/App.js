import Component from '../component.js';
import Header from './header.js';
import Footer from './footer.js';
import PokemonList from '../../ImageList.js';
import { getPokemon } from '../../services/pokemon-api.js';
import Search from '../../options/Search.js';
import Paging from '../../options/Paging.js';
import hashStorage from '../../services/hash-storage.js';

class App extends Component {

    onRender(dom) {

        const header = new Header();
        dom.prepend(header.renderDOM());

        const footer = new Footer();
        dom.prepend(footer.renderDOM());

        const optionsSection = dom.querySelector('.options-sections');
        const search = new Search();
        optionsSection.appendChild(search.renderDOM());

        const listSection = dom.querySelector('.list-section');

        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const pokemonList = new PokemonList({ pokemon: [] });
        listSection.appendChild(pokemonList.renderDOM());

        function loadPokemonList() {
            const options = hashStorage.get();
            getPokemon(options)
                .then(data => {
                    const pokemon = data.results.results;
                    const totalCount = data.results.count;

                    pokemonList.update({ pokemon: pokemon });
                    paging.update({
                        totalCount: totalCount,
                        currentPage: +options.page
                    });
                });
        }

        loadPokemonList();

        window.addEventListener('hashchange', () => {
            loadPokemonList();
        });
    }    

    renderHTML() {
        return /*html*/`
           <div>
              <!--- header goes here -->

              <main>
                 <section class="options-sections">
                     <!-- options go here -->
                <section>

                <section class="list-section">
                    <!-- paging goes here -->
                    <!-- quote list goes here -->
                </section>
            </main>
        </div>
    `;
    }
}

export default App;