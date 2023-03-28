import { useNavigate } from 'react-router-dom';
import './index.css';

const Menu = ({ setPokeState }: any) => {
    const navigate = useNavigate();
    const handleNewGame = () => {
        setPokeState();
    };
    const handleHome = () => {
        setPokeState();
        navigate('/');
    };
    return (
        <div className="col-4">
            <div className="menu-box">
                <button className="btn-menu" onClick={handleHome}>
                    Home
                </button>
                <button className="btn-menu" onClick={handleNewGame}>
                    New Game
                </button>
                <button className="btn-menu">New Opponent</button>
            </div>
        </div>
    );
};

export default Menu;
