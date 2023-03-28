import { Route, Routes } from 'react-router-dom';
import BattlePage from './Pages/BattlePage';
import HomePage from './Pages/HomePage';
import { useEffect, useState } from 'react';
import randomPokemon from './services/randomPokemon';
import coinFlip from './services/coinFlip';
import handleMissChance from './services/handleMissChance';

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
    useEffect(() => {
        setPokeState();
    }, []);
    const setPokeState = async () => {
        const one = await randomPokemon();
        const two = await randomPokemon();
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
                return;
            }
            let secondPokemonDefense = secondPokemon.defense;
            if (secondPokemon.defense > 90) {
                secondPokemonDefense = 90;
            }
            const dmgTaken = (firstPokemon.attack / 2) * (1 - secondPokemonDefense / 100);
            const dmgOutput = Math.round(dmgTaken);
            const newLog = `${firstPokemon.name} dealt ${dmgOutput} to ${secondPokemon.name}`;
            setLogs((prevState) => [...prevState, newLog]);
            setLeftTurn(false);
            const pokePercentDmg = Math.round((dmgOutput / secondPokemon.health) * 100);
            const newPokeHealth = secondPokemonCurrentHealth - pokePercentDmg;
            setSecondPokemonCurrentHealth(newPokeHealth);
            return;
        } else {
            if (handleMissChance()) {
                const newLog = `${firstPokemon.name} missed`;
                setLogs((prevState) => [...prevState, newLog]);
                setLeftTurn(true);
                return;
            }
            let firstPokemonDefense = secondPokemon.defense;
            if (firstPokemon.defense > 90) {
                firstPokemonDefense = 90;
            }
            const dmgTaken: number = (secondPokemon.attack / 2) * (1 - firstPokemonDefense / 100);
            const dmgOutput = Math.round(dmgTaken);
            const newLog = `${secondPokemon.name} dealt ${dmgOutput} to ${firstPokemon.name}`;
            setLogs((prevState) => [...prevState, newLog]);
            const pokePercentDmg = Math.round((dmgOutput / firstPokemon.health) * 100);
            const newPokeHealth = firstPokemonCurrentHealth - pokePercentDmg;
            setFirstPokemonCurrentHealth(newPokeHealth);
            setLeftTurn(true);
            return;
        }
    };
    const handleGameEnd = () => {};
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
                path="/BattlePage"
                element={
                    <BattlePage
                        firstPokemon={firstPokemon}
                        secondPokemon={secondPokemon}
                        setPokeState={setPokeState}
                        handlePokeAttack={handlePokeAttack}
                        leftTurn={leftTurn}
                        logs={logs}
                        firstPokemonCurrentHealth={firstPokemonCurrentHealth}
                        secondPokemonCurrentHealth={secondPokemonCurrentHealth}
                    />
                }
            ></Route>
        </Routes>
    );
};

export default App;

