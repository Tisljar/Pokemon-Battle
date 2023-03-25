const handleMissChance = () => {
    const missChance = 0.2;
    const randomNumber = Math.random();
    return randomNumber <= missChance;
};

export default handleMissChance;
