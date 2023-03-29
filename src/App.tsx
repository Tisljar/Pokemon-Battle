import { Route, Routes } from 'react-router-dom';
import BattlePage from './Pages/BattlePage';
import HomePage from './Pages/HomePage';
import { useEffect, useState } from 'react';
import randomPokemon from './services/randomPokemon';
import coinFlip from './services/coinFlip';
import handleMissChance from './services/handleMissChance';
import { IPokemon } from './helpers/interfaces/IPokemon';

const App = () => {
    const [firstPokemon, setFirstPokemon] = useState({
        name: '',
        health: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        sprite: '',
    });
    const [secondPokemon, setSecondPokemon] = useState({
        name: '',
        health: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        sprite: '',
    });
    const [leftTurn, setLeftTurn] = useState(true);
    const [logs, setLogs] = useState<string[]>([]);
    const [firstPokemonCurrentHealth, setFirstPokemonCurrentHealth] = useState(100);
    const [secondPokemonCurrentHealth, setSecondPokemonCurrentHealth] = useState(100);
    const [isLoad, setIsLoad] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [leftAnimation, setLeftAnimation] = useState('pokemon-sprite');
    const [rightAnimation, setRightAnimation] = useState('pokemon-sprite');
    useEffect(() => {
        setPokeState();
        setLeftAnimation('pokemon-sprite');
        setRightAnimation('pokemon-sprite');
    }, []);
    const setPokeState = async () => {
        setIsLoad(true);
        const one = await randomPokemon();
        const two = await randomPokemon();
        setIsLoad(false);
        if (one.speed === two.speed) {
            setLeftTurn(coinFlip());
        } else if (one.speed > two.speed) {
            setLeftTurn(true);
        } else {
            setLeftTurn(false);
        }
        setFirstPokemon(one);
        setSecondPokemon(two);
    };
    const handlePokeAttack = () => {
        if (leftTurn) {
            if (handleMissChance()) {
                const newLog = `${firstPokemon.name} missed`;
                setLogs((prevState) => [...prevState, newLog]);
                setLeftTurn(false);
                setRightAnimation('pokemon-sprite animation-to-right');
                setLeftAnimation('pokemon-sprite');
                return;
            }
            setRightAnimation('pokemon-sprite animation-to-right');
            setLeftAnimation('pokemon-sprite');
            let pokemonDefense = secondPokemon.defense;
            if (secondPokemon.defense > 90) {
                pokemonDefense = 90;
            }
            const dmgTaken = (firstPokemon.attack / 2) * (1 - pokemonDefense / 100);
            const dmgOutput = Math.round(dmgTaken);
            const newLog = `${firstPokemon.name} dealt ${dmgOutput} to ${secondPokemon.name}`;
            setLogs((prevState) => [...prevState, newLog]);
            setLeftTurn(false);
            const pokePercentDmg = Math.round((dmgOutput / secondPokemon.health) * 100);
            const newPokeHealth = secondPokemonCurrentHealth - pokePercentDmg;
            setSecondPokemonCurrentHealth(newPokeHealth);
            if (newPokeHealth <= 0) {
                setGameOver(true);
            }
            return;
        } else {
            if (handleMissChance()) {
                const newLog = `${secondPokemon.name} missed`;
                setLogs((prevState) => [...prevState, newLog]);
                setLeftTurn(true);
                setLeftAnimation('pokemon-sprite animation-to-left');
                setRightAnimation('pokemon-sprite');
                return;
            }
            setLeftAnimation('pokemon-sprite animation-to-left');
            setRightAnimation('pokemon-sprite');
            let pokemonDefense = firstPokemon.defense;
            if (firstPokemon.defense > 90) {
                pokemonDefense = 90;
            }
            const dmgTaken: number = (secondPokemon.attack / 2) * (1 - pokemonDefense / 100);
            const dmgOutput = Math.round(dmgTaken);
            const newLog = `${secondPokemon.name} dealt ${dmgOutput} to ${firstPokemon.name}`;
            setLogs((prevState) => [...prevState, newLog]);
            const pokePercentDmg = Math.round((dmgOutput / firstPokemon.health) * 100);
            const newPokeHealth = firstPokemonCurrentHealth - pokePercentDmg;
            setFirstPokemonCurrentHealth(newPokeHealth);
            setLeftTurn(true);
            if (newPokeHealth <= 0) {
                setGameOver(true);
            }
            return;
        }
    };
    const handleNewGame = () => {
        setLeftTurn(true);
        setLogs([]);
        setFirstPokemonCurrentHealth(100);
        setSecondPokemonCurrentHealth(100);
        setPokeState();
        setLeftAnimation('pokemon-sprite');
        setRightAnimation('pokemon-sprite');
        setGameOver(false);
    };
    const handleNewOpponent = async (winner: IPokemon) => {
        if (winner.name === secondPokemon.name) {
            setLeftTurn(true);
            setLogs([]);
            setFirstPokemonCurrentHealth(100);
            setSecondPokemonCurrentHealth(100);
            setLeftAnimation('pokemon-sprite');
            setRightAnimation('pokemon-sprite');
            setIsLoad(true);
            const one = await randomPokemon();
            if (secondPokemon.speed === one.speed) {
                setLeftTurn(coinFlip());
            } else if (secondPokemon.speed > one.speed) {
                setLeftTurn(false);
            } else {
                setLeftTurn(true);
            }
            setFirstPokemon(one);
            setGameOver(false);
            setIsLoad(false);
        } else {
            setLeftTurn(true);
            setLogs([]);
            setFirstPokemonCurrentHealth(100);
            setSecondPokemonCurrentHealth(100);
            setLeftAnimation('pokemon-sprite');
            setRightAnimation('pokemon-sprite');
            setIsLoad(true);
            const two = await randomPokemon();
            if (firstPokemon.speed === two.speed) {
                setLeftTurn(coinFlip());
            } else if (firstPokemon.speed > two.speed) {
                setLeftTurn(true);
            } else {
                setLeftTurn(false);
            }
            setSecondPokemon(two);
            setGameOver(false);
            setIsLoad(false);
        }
    };
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
                path="/BattlePage"
                element={
                    <BattlePage
                        isLoad={isLoad}
                        firstPokemon={firstPokemon}
                        secondPokemon={secondPokemon}
                        handleNewGame={handleNewGame}
                        handlePokeAttack={handlePokeAttack}
                        handleNewOpponent={handleNewOpponent}
                        leftTurn={leftTurn}
                        logs={logs}
                        gameOver={gameOver}
                        firstPokemonCurrentHealth={firstPokemonCurrentHealth}
                        secondPokemonCurrentHealth={secondPokemonCurrentHealth}
                        leftAnimation={leftAnimation}
                        rightAnimation={rightAnimation}
                    />
                }
            ></Route>
        </Routes>
    );
};

export default App;

