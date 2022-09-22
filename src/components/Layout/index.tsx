import { ReactNode, ReactElement, lazy } from "react";

const Navbar = lazy(() => import("./Navbar"));
const Footer = lazy(() => import("./Footer"));

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps): ReactElement => {
    return (
        <div className="w-full min-h-screen bg-background mx-auto px-8 sm:px-20 dark:bg-dark-background dark:text-slate-50">
            <Navbar />
            <div className="mt-5">{children}</div>
            <Footer />
            <div className="h-[100px]" />
        </div>
    );
};

export default Layout;
