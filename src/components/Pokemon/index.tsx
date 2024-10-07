import { IPokemon } from '../../helpers/interfaces/IPokemon';
import HealthBar from '../HealthBar';
import Sprite from '../Sprite';
import Stats from '../Stats';
import './index.css';

const Pokemon = (props: any) => {
    const { pokemon } = props;
    const { mirror } = props;
    const { pokemonCurrentHealth } = props;
    const { animation } = props;
    return (
        <>
            <HealthBar pokemonCurrentHealth={pokemonCurrentHealth} />
            <Sprite sprite={pokemon.sprite} mirror={mirror} animation={animation} />
            <Stats pokemon={pokemon} />
        </>
    );
};

export default Pokemon;
