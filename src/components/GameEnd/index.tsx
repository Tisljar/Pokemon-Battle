import { useNavigate } from 'react-router-dom';
import './index.css';

const GameEnd = ({
    handleNewGame,
    handleNewOpponent,
    firstPokemon,
    firstPokemonCurrentHealth,
    secondPokemon,
    secondPokemonCurrentHealth,
}: any) => {
    const navigate = useNavigate();
    let winner = {
        name: '',
        health: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        sprite: '',
    };
    if (firstPokemonCurrentHealth <= 0) {
        winner = secondPokemon;
    } else if (secondPokemonCurrentHealth <= 0) {
        winner = firstPokemon;
    }
    const newGame = () => {
        handleNewGame();
    };
    const handleHome = () => {
        handleNewGame();
        navigate('/');
    };
    const newOpponent = () => {
        handleNewOpponent(winner);
    };
    return (
        <div className="loader-container">
            <div className="end-box">
                <div className="winner">
                    <h3 className="winner-title">{winner.name} won!</h3>
                </div>
                <button className="btn-menu" onClick={handleHome}>
                    Home
                </button>
                <button className="btn-menu" onClick={newGame}>
                    New Game
                </button>
                <button className="btn-menu" onClick={newOpponent}>
                    New Opponent
                </button>
            </div>
        </div>
    );
};

export default GameEnd;
