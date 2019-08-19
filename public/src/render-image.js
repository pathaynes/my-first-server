export default function renderImage(pokemon) {
    const html = /*html*/`
    <li>
      <img src="${pokemon.url_image}">
      <h1>Name: ${pokemon.pokemon}</h1>
      <h2>Type: ${pokemon.type_1}</h2>
      <h2>Attack: ${pokemon.attack}</h2>
    </li>
`;
    return html;
}