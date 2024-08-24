import React, { useState, useEffect, useRef } from 'react';
import Slider from './components/Slider.jsx';
import Home from './components/Home.jsx';   

const App = () => {
    return (
        <div>
            <Slider />
            <Home />
        </div>
    );
};

export default App;
