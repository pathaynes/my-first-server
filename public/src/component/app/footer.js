import Component from '../component.js';

class Footer extends Component {
    renderHTML() {
        return /*html*/ `
    <footer>
       <div class="flex">
         <img src="./data/assets/pokeball(transparent).png" id="pokeball">
        </div>
    </footer>
        `;
    }
}

export default Footer;