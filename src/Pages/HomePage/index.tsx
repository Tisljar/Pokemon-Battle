import { Link } from 'react-router-dom';
import './index.css';

const HomePage = () => {
    return (
        <div className="container">
            <div className="background-pokemon">
                <Link to="/BattlePage" className="btn">
                    <button className="btn-start">New Game</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
