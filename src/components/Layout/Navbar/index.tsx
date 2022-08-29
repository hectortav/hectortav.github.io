import { useState, useEffect, ReactElement } from "react";
import { Hamburger } from "./Hamburger";

const Navbar = (): ReactElement => {
    const [navVisible, setNavVisible] = useState<boolean>(false);
    useEffect(() => {
        if (navVisible === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [navVisible]);

    return (
        <nav className="border-b border-slate-400">
            <div className="w-full h-20 z-10 flex items-center">
                {/*<div>Navbar</div>*/}
                <div className="ml-auto">
                    <Hamburger {...{ navVisible, setNavVisible }}>
                        <ul className="bg-pink-100 md:bg-transparent flex flex-auto md:flex-row absolute md:relative inset-0 w-full flex-col items-center justify-center overflow-y-hidden text-xl md:text-lg transition duration-150 ease-out">
                            <li className="cursor-pointer">
                                <a
                                    href="#home"
                                    onClick={() => setNavVisible(false)}
                                >
                                    Home
                                </a>
                            </li>
                            <div className="w-4" />
                            <li className="cursor-pointer">
                                <a
                                    href="#projects"
                                    onClick={() => setNavVisible(false)}
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </Hamburger>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
