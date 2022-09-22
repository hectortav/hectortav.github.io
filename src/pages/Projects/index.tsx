import { useState, useEffect, lazy } from "react";
import { DataCardProps } from "@hectortav/react-carousel";
const Carousel = lazy(() =>
    import("@hectortav/react-carousel").then((module) => ({
        default: module.Carousel,
    }))
);
import "@hectortav/react-carousel/dist/index.css";

const Projects = () => {
    const [projects, setProjects] = useState<DataCardProps[]>([]);
    useEffect(() => {
        fetch("data/projects.json")
            .then((res) => res.json())
            .then(({ projects: data }) => {
                setProjects(data);
            });
    }, []);
    return (
        <div id="projects" className="border-b border-slate-400">
            <div className="flex flex-auto mt-20 flex-col">
                <h3 className="text-lg font-light">§ Projects</h3>
                <Carousel
                    data={projects}
                    title={
                        <>
                            Check out
                            <br />
                            my latest projects
                            <br />
                            <a
                                target="_blank"
                                href="https://github.com/hectortav/react-carousel"
                                className="text-base underline text-sky-600 hover:no-underline hover:text-sky-600 "
                            >
                                How can I use this?
                            </a>
                        </>
                    }
                />
            </div>
        </div>
    );
};

export default Projects;
