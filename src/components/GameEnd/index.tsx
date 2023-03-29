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
    let winner = '';
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
