import React from 'react';
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock } from './components';
import {Finder, Resume, Safari, Terminal, Text, Image} from '#windows/index.js';


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
            <Text />
            <Image />
        </main>
    )
};
export default App;
