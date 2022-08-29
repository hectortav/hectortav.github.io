import { ReactNode } from "react";

interface HamburgerProps {
    navVisible: boolean;
    setNavVisible: (arg0: boolean) => void;
    children: ReactNode;
}

export const Hamburger = ({
    navVisible,
    setNavVisible,
    children,
}: HamburgerProps) => {
    return (
        <>
            <div className="hidden md:block">{children}</div>
            <button
                type="button"
                className="relative z-10 ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 dark:text-gray-400 dark:hover:bg-gray-700 md:hidden"
                onClick={() => setNavVisible(!navVisible)}
            >
                <div style={{ display: navVisible ? "none" : "block" }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                        width={25}
                        height={25}
                        fill="currentColor"
                    >
                        <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2H3z" />
                    </svg>{" "}
                </div>
                <div style={{ display: navVisible ? "block" : "none" }}>
                    <svg
                        role="img"
                        aria-label="close main menu"
                        className="h-6 w-6"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                    >
                        <g fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M7.719 6.281 6.28 7.72 23.563 25 6.28 42.281 7.72 43.72 25 26.437 42.281 43.72l1.438-1.438L26.437 25 43.72 7.719 42.28 6.28 25 23.563Z" />
                        </g>
                    </svg>
                </div>
            </button>
            <div
                style={{
                    display: navVisible ? "block" : "none",
                }}
                className="h-screen w-screen"
            >
                {children}
            </div>
        </>
    );
};
