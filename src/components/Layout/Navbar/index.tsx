import { useState, useEffect, ReactElement, lazy } from "react";

export const Hamburger = lazy(() => import("./Hamburger"));
const DarkModeSwitch = lazy(() =>
    import("../../DarkMode").then((module) => ({
        default: module.DarkModeSwitch,
    }))
);

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
                <div className="ml-auto flex flex-row-reverse sm:flex-row items-center justify-center">
                    <Hamburger {...{ navVisible, setNavVisible }}>
                        <ul className="bg-background md:bg-transparent flex flex-auto md:flex-row absolute md:relative inset-0 w-full flex-col items-center justify-center overflow-y-hidden text-xl md:text-lg transition duration-150 ease-out dark:bg-dark-background">
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
                                    href="#readme"
                                    onClick={() => setNavVisible(false)}
                                >
                                    Readme
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
                    <div className="sm:ml-4">
                        <DarkModeSwitch
                            onClickFallback={() => setNavVisible(false)}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
