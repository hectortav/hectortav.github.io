import { useState, lazy } from "react";

function lazyImport<
    T extends React.ComponentType<any>,
    I extends { [K2 in K]: T },
    K extends keyof I
>(factory: () => Promise<I>, name: K): I {
    return Object.create({
        [name]: lazy(() =>
            factory().then((module) => ({ default: module[name] }))
        ),
    });
}

const { Contributions } = lazyImport(
    () => import("../../components"),
    "Contributions"
);

/*const Contributions = lazy(() => import("../../components")).then(
    (module: any) => ({
        default: module[Contributions],
    })
);*/

const Github = () => {
    const [time, setTime] = useState<string | null>(null);
    return (
        <div id="github" className="border-b border-slate-400">
            <div className="flex flex-auto mt-20 flex-col sm:flex-row">
                <div className="w-full h-full flex flex-col min-h-[660px]">
                    <h3 className="text-lg font-light">§ Github</h3>
                    <Contributions />
                </div>
            </div>
        </div>
    );
};

export default Github;
