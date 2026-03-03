import React from 'react';

import dayjs from "dayjs";

import {navIcons, navLinks} from "#constants/index.js";
import useWindowStore from "#store/window.js";



const Navbar = () => {

    const { openWindow } = useWindowStore();

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold">Fernando's IOS Style</p>

                <ul>
                    {navLinks.map(({ id, name, type }) => ( //  ( means it'll return whatever is within it.
                        <li
                            key={id}
                            onClick={() => openWindow(type)}
                        >
                            <p> {name} </p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img
                                src={img}
                                alt={`icon-${id}`}
                                className="icon-hover"
                            />
                        </li>
                    ))}
                </ul>

                <time>
                    {dayjs().format('YYYY-MM-DD HH:mm')}
                </time>
            </div>
        </nav>
    )
}
export default Navbar
