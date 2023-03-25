import { useEffect, useState } from 'react';
import Attack from '../../components/Attack';
import Logs from '../../components/Logs';
import Menu from '../../components/Menu';
import Pokemon from '../../components/Pokemon';
import randomPokemon from '../../services/randomPokemon';

const BattlePage = ({ firstPokemon, secondPokemon, setPokeState }: any) => {
    return (
        <div className="flex-container">
            <div className="row">
                <Pokemon pokemon={firstPokemon} />
                <Attack />
                <Pokemon pokemon={secondPokemon} />
            </div>
            <div className="row">
                <Menu setPokeState={setPokeState} />
                <Logs />
            </div>
        </div>
    );
};

export default BattlePage;
