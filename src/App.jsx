import React from 'react';
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock } from './components';
import { Terminal } from '#windows/index.js';

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main className="">
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
        </main>
    )
};
export default App;
