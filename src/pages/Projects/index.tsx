import { useState, useEffect, Dispatch } from "react";

interface ProjectCardProps {
    image: string;
    title: string;
    category: string;
    description: string;
    uri: string;
}

const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
};

const ProjectCard = ({
    image,
    title,
    category,
    description,
    uri,
}: ProjectCardProps) => {
    return (
        <div
            className="transition ease-in-out delay-50 hover:scale-105 duration-300 w-[250px] cursor-pointer mx-auto md:mx-0"
            onClick={() => openInNewTab(uri)}
        >
            <div className="mt-[50px]">
                <div className="w-[250px] h-[250px]">
                    <img
                        src={image}
                        alt={`${title} preview`}
                        className="w-[250px] h-[250px] drop-shadow-xl rounded overflow-hidden object-cover"
                    />
                </div>
                <h2 className="text-md font-bold mt-[10px] ">
                    {title}{" "}
                    <span className="text-slate-500 font-normal">
                        | {category}
                    </span>
                </h2>
                <h3 className="text-lg font-normal sm:min-h-[100px]">
                    {description}
                </h3>
            </div>
        </div>
    );
};

const Projects = () => {
    const [active, setActive] = useState<number>(0);
    const [projects, setProjects] = useState<ProjectCardProps[]>([]);
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
                <div className="mt-10 flex flex-auto flex-col sm:flex-row items-center">
                    <h2 className="text-2xl font-normal">
                        Check out
                        <br />
                        my latest projects
                    </h2>
                    <div className="sm:ml-auto mt-10 sm:mt-0">
                        <Pagination
                            {...{
                                active,
                                setActive,
                                count: Math.ceil(projects.length / 4),
                            }}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {projects
                        .slice(active * 4, active * 4 + 4)
                        .map(({ ...props }: ProjectCardProps) => {
                            return <ProjectCard key={props.title} {...props} />;
                        })}
                </div>{" "}
                <div className="my-10 flex flex-auto mx-auto sm:hidden">
                    <Pagination
                        {...{
                            active,
                            setActive,
                            count: Math.ceil(projects.length / 4),
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

interface PaginationProps {
    active: number;
    setActive: Dispatch<number>;
    count: number;
}

interface TabProps {
    active: boolean;
}

const Pagination = ({ active, setActive, count }: PaginationProps) => {
    const interval = 10;
    useEffect(() => {
        const timer = setTimeout(() => {
            let a;
            if (active >= count - 1) {
                a = 0;
            } else {
                a = active + 1;
            }
            setActive(a);
        }, interval * 1000);
        return () => clearTimeout(timer);
    }, [active, count, setActive]);

    const Tab = ({ active = false }: TabProps) => {
        return (
            <div className="transition ease-in-out delay-50 hover:scale-110 duration-300 cursor-pointer h-[10px] w-[70px] bg-slate-300 rounded drop-shadow-sm overflow-hidden align-center items-center justify-center">
                {active && (
                    <div
                        className="h-[10px] bg-slate-500"
                        style={{
                            animation: `progress infinite ${interval}s linear`,
                        }}
                    />
                )}
            </div>
        );
    };

    return (
        <div className="flex flex-auto flex-row items-center gap-2">
            {Array(count)
                .fill(0)
                .map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setActive(index);
                        }}
                    >
                        <Tab
                            active={index === active}
                            {...{ index, setActive }}
                        />
                    </button>
                ))}
        </div>
    );
};

export default Projects;
