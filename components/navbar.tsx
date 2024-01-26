'use client'
import Link from "next/Link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="flex flex-row justify-center items-center w-full">
            <div className="flex flex-row justify-center items-center">
                <Link href="/" className="mr-2 sm:mx-2">
                    <h2 className="text-2xl font-semibold relative underline-animation">
                        Home
                    </h2>
                </Link>
                <Link href="/about" className="mr-2 sm:mx-2">
                    <h2 className="text-2xl font-semibold relative underline-animation">
                        About
                    </h2>
                </Link>
                <Link href="/projects" className="mr-2 sm:mx-2">
                    <h2 className="text-2xl font-semibold relative underline-animation">
                        Projects
                    </h2>
                </Link>
            </div>
            <button onClick={toggleDarkMode} className="m-0 sm:ml-4">
                <FontAwesomeIcon size="2x" icon={darkMode ? faToggleOn : faToggleOff} />
            </button>
        </div>
    );
}
