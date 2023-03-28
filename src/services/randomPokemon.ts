import { getPokemon } from '../adapters/fetch';
import { IPokemon } from '../helpers/interfaces/IPokemon';
import randomPokemeonIdGenerator from './randomPokemonIdGenerator';

const randomPokemon = async () => {
    const pokeId = randomPokemeonIdGenerator();
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;
    const data = await getPokemon(endpoint);
    const pokemon: IPokemon = {
        name: data.name,
        health: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        speed: data.stats[5].base_stat,
        sprite: data.sprites.front_default,
    };
    return pokemon;
};

export default randomPokemon;
