import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="container">
            <Link to="/BattlePage" className="btn">
                New Game
            </Link>
        </div>
    );
};

export default HomePage;
