import { useEffect, useState } from 'react';
import randomPokemon from '../../services/randomPokemon';

const BattlePage = () => {
    const [firstPokemon, setFirstPokemon] = useState({});
    const [secondPokemon, setSecondPokemon] = useState({});
    useEffect(() => {
        setPokeState();
    }, []);
    const setPokeState = async () => {
        const one = await randomPokemon();
        const two = await randomPokemon();
        setFirstPokemon(one);
        setSecondPokemon(two);
    };
    return <></>;
};

export default BattlePage;
