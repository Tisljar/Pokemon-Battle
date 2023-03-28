import { useEffect } from 'react';
import './index.css';

const HealthBar = ({ pokemonCurrentHealth }: any) => {
    const healthTitleClass =
        pokemonCurrentHealth <= 50 && pokemonCurrentHealth > 30
            ? 'title-orange'
            : pokemonCurrentHealth <= 30
            ? 'title-red'
            : 'title-green';
    const borderHealthClass =
        pokemonCurrentHealth <= 50 && pokemonCurrentHealth > 30
            ? 'health-bar orange'
            : pokemonCurrentHealth <= 30
            ? 'health-bar red'
            : 'health-bar green';
    const backgroundHealthClass =
        pokemonCurrentHealth <= 50 && pokemonCurrentHealth > 30
            ? 'current-health l-b-orange'
            : pokemonCurrentHealth <= 30
            ? 'current-health l-b-red'
            : 'current-health l-b-green';
    return (
        <>
            <h3 className={healthTitleClass}>{pokemonCurrentHealth}%</h3>
            <div className={borderHealthClass}>
                <div className={backgroundHealthClass} style={{ width: `${pokemonCurrentHealth}%` }}></div>
            </div>
        </>
    );
};

export default HealthBar;
