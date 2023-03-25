import { Route, Routes } from 'react-router-dom';
import BattlePage from './Pages/BattlePage';
import HomePage from './Pages/HomePage';
import { useEffect, useState } from 'react';
import randomPokemon from './services/randomPokemon';

const App = () => {
    const [firstPokemon, setFirstPokemon] = useState({ name: '', health: 0, attack: 0, defense: 0, speed: 0 });
    const [secondPokemon, setSecondPokemon] = useState({ name: '', health: 0, attack: 0, defense: 0, speed: 0 });
    useEffect(() => {
        setPokeState();
    }, []);
    const setPokeState = async () => {
        const one = await randomPokemon();
        const two = await randomPokemon();
        setFirstPokemon(one);
        setSecondPokemon(two);
    };
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
                path="/BattlePage"
                element={
                    <BattlePage firstPokemon={firstPokemon} secondPokemon={secondPokemon} setPokeState={setPokeState} />
                }
            ></Route>
        </Routes>
    );
};

export default App;

