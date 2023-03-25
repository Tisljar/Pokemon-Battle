import { IPokemon } from '../../helpers/interfaces/IPokemon';
import HealthBar from '../HealthBar';
import Sprite from '../Sprite';
import Stats from '../Stats';
import './index.css';

const Pokemon = (props: any) => {
    const { pokemon } = props;
    return (
        <>
            <div className="col-4 pokemon-content">
                <HealthBar />
                <Sprite />
                <Stats pokemon={pokemon} />
            </div>
        </>
    );
};

export default Pokemon;
