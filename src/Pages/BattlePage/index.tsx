import { useEffect, useState } from 'react';
import Attack from '../../components/Attack';
import Logs from '../../components/Logs';
import Menu from '../../components/Menu';
import Pokemon from '../../components/Pokemon';
import randomPokemon from '../../services/randomPokemon';

const BattlePage = ({
    firstPokemon,
    secondPokemon,
    setPokeState,
    handlePokeAttack,
    leftTurn,
    logs,
    firstPokemonCurrentHealth,
    secondPokemonCurrentHealth,
}: any) => {
    return (
        <div className="flex-container">
            <div className="row">
                <Pokemon pokemon={firstPokemon} pokemonCurrentHealth={firstPokemonCurrentHealth} mirror={true} />
                <Attack handlePokeAttack={handlePokeAttack} leftTurn={leftTurn} />
                <Pokemon pokemon={secondPokemon} pokemonCurrentHealth={secondPokemonCurrentHealth} mirror={false} />
            </div>
            <div className="row">
                <Menu setPokeState={setPokeState} />
                <Logs logs={logs} />
            </div>
        </div>
    );
};

export default BattlePage;
