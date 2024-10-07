import { Link } from 'react-router-dom';
import './index.css';

const HomePage = () => {
    return (
        <div className="container home-container">
            <div className="background-pokemon"></div>
            <Link to="/BattlePage" className="btn">
                <button className="btn-start">New Game</button>
            </Link>
        </div>
    );
};

export default HomePage;
