import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BattlePage from './Pages/BattlePage';
import HomePage from './Pages/HomePage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/BattlePage" element={<BattlePage />}></Route>
        </Routes>
    );
};

export default App;

