import './index.css';

const Sprite = ({ sprite, mirror }: any) => {
    const imgCss = mirror ? 'pokemon-sprite mirror' : 'pokemon-sprite';
    return (
        <>
            <img src={sprite} alt="" className={imgCss} />
        </>
    );
};

export default Sprite;
