import { ReactElement } from "react";
import { OrigamiBoat } from "../Origami";

const Footer = (): ReactElement => {
    return (
        <footer className="w-full z-10">
            <div className="flex flex flex-auto flex-col sm:flex-row">
                <div className="sm:w-1/2">
                    <OrigamiBoat />
                </div>
                <div className="sm:w-1/4 my-10 sm:my-0">
                    <div className="grid gap-4 grid-cols-2">
                        <a href="#home">Home</a>
                        <a href="#projects">Projects</a>
                        <a href="/Resume.pdf" target="_blank">
                            Resume
                        </a>
                    </div>
                </div>
                <div className="sm:w-1/4">
                    <div className="text-2xl font-normal">
                        tavhector@gmail.com
                    </div>

                    <div className="mt-4 text-lg font-normal text-slate-500">
                        Contact me
                    </div>
                </div>
            </div>
            <div className="mt-10">© {new Date().getFullYear()} hectortav</div>
        </footer>
    );
};

export default Footer;
