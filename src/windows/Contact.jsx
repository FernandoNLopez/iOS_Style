import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {socials} from "#constants/index.js";
import {WindowControls} from "#components/index.js";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2> Contact me </h2>
            </div>

            <div className="p-5 space-y-5">
                <img src="public/images/adrian.jpg" alt="Fernando" className="w-20 rounded-full" />
                <h3> Let's Connect </h3>
                <p> Got an idea? A bug? Need a solution? I'm in. </p>
                <p>fernandolopezcontact1@gmail.com</p>

                <ul>
                    { socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                                <img src={icon} alt={text} className="size-6" />
                                <p> {text} </p>
                            </a>
                        </li>
                    )) }
                </ul>
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow;
