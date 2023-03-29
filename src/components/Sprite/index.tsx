import { useEffect } from 'react';
import './index.css';

const Sprite = ({ sprite, mirror, animation }: any) => {
    useEffect(() => {
        let imgCss = animation;
        if (mirror) {
            imgCss = imgCss + 'mirror';
        }
    });
    return (
        <>
            <div className="sprite-container">
                <img src={sprite} alt="" className={animation} />
            </div>
        </>
    );
};

export default Sprite;
