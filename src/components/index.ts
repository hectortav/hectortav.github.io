import { lazy } from "react";

export const Layout = lazy(() => import("./Layout"));
export const DarkModeWrapper = lazy(() =>
    import("./DarkMode").then((module) => ({ default: module.DarkModeWrapper }))
);
export const OrigamiBoat = lazy(() =>
    import("./Origami").then((module) => ({ default: module.OrigamiBoat }))
);
