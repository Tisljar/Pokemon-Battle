import { getPokemon } from '../adapters/fetch';

const randomPokemon = () => {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon/';
    const pokemon = getPokemon(endpoint);
    return pokemon;
};

export default randomPokemon;
