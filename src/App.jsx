import React from 'react';
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock } from './components';
import {Finder, Resume, Safari, Terminal} from '#windows/index.js';

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main className="">
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Safari />
            <Resume />
            <Finder />
        </main>
    )
};
export default App;
