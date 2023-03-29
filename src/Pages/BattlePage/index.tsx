import { useEffect, useState } from 'react';
import Attack from '../../components/Attack';
import GameEnd from '../../components/GameEnd';
import Loader from '../../components/Loader';
import Logs from '../../components/Logs';
import Menu from '../../components/Menu';
import Pokemon from '../../components/Pokemon';
import randomPokemon from '../../services/randomPokemon';

const BattlePage = ({
    firstPokemon,
    secondPokemon,
    handleNewGame,
    handlePokeAttack,
    handleNewOpponent,
    leftTurn,
    logs,
    firstPokemonCurrentHealth,
    secondPokemonCurrentHealth,
    gameOver,
    isLoad,
    leftAnimation,
    rightAnimation,
}: any) => {
    return (
        <div className="flex-container">
            {isLoad && <Loader />}
            {gameOver && (
                <GameEnd
                    handleNewGame={handleNewGame}
                    handleNewOpponent={handleNewOpponent}
                    firstPokemon={firstPokemon}
                    secondPokemon={secondPokemon}
                    firstPokemonCurrentHealth={firstPokemonCurrentHealth}
                    secondPokemonCurrentHealth={secondPokemonCurrentHealth}
                />
            )}
            <div className="row">
                <Pokemon
                    pokemon={firstPokemon}
                    pokemonCurrentHealth={firstPokemonCurrentHealth}
                    animation={rightAnimation}
                    mirror={true}
                />
                <Attack handlePokeAttack={handlePokeAttack} leftTurn={leftTurn} />
                <Pokemon
                    pokemon={secondPokemon}
                    pokemonCurrentHealth={secondPokemonCurrentHealth}
                    animation={leftAnimation}
                    mirror={false}
                />
            </div>
            <div className="row">
                <Menu handleNewGame={handleNewGame} handleNewOpponent={handleNewOpponent} />
                <Logs logs={logs} />
            </div>
        </div>
    );
};

export default BattlePage;
