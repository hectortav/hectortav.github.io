import { useState, useEffect } from "react";
import { Carousel, DataCardProps } from "../../components";

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
                        </>
                    }
                />
            </div>
        </div>
    );
};

export default Projects;
