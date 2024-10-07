import { useNavigate } from 'react-router-dom';
import './index.css';

const Menu = ({ handleNewGame, handleNewOpponent }: any) => {
    const navigate = useNavigate();
    const newGame = () => {
        handleNewGame();
    };
    const handleHome = () => {
        handleNewGame();
        navigate('/');
    };
    const newOpponent = () => {
        const winner = 'no-one';
        handleNewOpponent(winner);
    };
    return (
        <div className="col-4 menu-responsive">
            <div className="menu-box">
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

export default Menu;
