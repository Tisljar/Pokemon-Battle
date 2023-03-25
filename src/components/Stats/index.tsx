import { IPokemon } from '../../helpers/interfaces/IPokemon';
import './index.css';

const Stats = (props: any) => {
    const { pokemon } = props;
    return (
        <>
            <h3>{pokemon.name}</h3>
            <div className="stat-box">
                <p>HP: {pokemon.health}</p>
                <p>Attack: {pokemon.attack}</p>
                <p>Defense: {pokemon.defense}</p>
                <p>Speed: {pokemon.speed}</p>
            </div>
        </>
    );
};

export default Stats;
