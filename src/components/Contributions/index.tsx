import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
// @ts-ignore
import Controls from "./Controls";

async function getContributions(
    token: string | undefined,
    username: string,
    fromDate: string,
    toDate: string
) {
    if (token === undefined) {
        return undefined;
    }
    const headers = {
        Authorization: `bearer ${token}`,
    };
    const body = {
        query: `query {
            user(login: "${username}") {
              contributionsCollection(from: "${fromDate}", to: "${toDate}") {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      date
                      weekday
                    }
                  }
                }
              }
            }
          }`,
    };
    const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        body: JSON.stringify(body),
        headers: headers,
    });
    const data = await response.json();
    return data;
}

interface ContributionProps {
    color: string;
    contributionCount: number;
    date: string;
    weekday: number;
}
// const swatch = ["#a374d6", "#894dca", "#7133b0", "#26103c", "#fddcb2"];
const swatch = ["#d82a0d", "#d68d10", "#f3d529", "#d8f656", "#fddcb2"];

const Contributions = () => {
    const [contributions, setContributions] = useState<ContributionProps[]>([]);
    // const [total, setTotal] = useState<number>(1);
    const [colors, setColors] = useState<Record<string, string>>({});
    const [zoom, setZoom] = useState<number>(12);
    useEffect(() => {
        // const year = 2022;
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 1);
        startDate.setFullYear(startDate.getFullYear() - 1);
        const endDate = new Date();
        endDate.setDate(endDate.getDate() - 1);

        getContributions(
            import.meta.env.VITE_GITHUB_ACCESS_TOKEN,
            "hectortav",
            startDate.toISOString(),
            endDate.toISOString()
        )
            .then(({ data }) => {
                const calendar =
                    data.user.contributionsCollection.contributionCalendar;

                const days: ContributionProps[] = calendar.weeks.reduce(
                    (
                        flat: any[],
                        { contributionDays }: { contributionDays: any[] }
                    ) => {
                        return flat.concat(contributionDays);
                    },
                    []
                );
                setContributions(days);
                // setTotal(calendar.totalContributions);
                const c: Record<string, string> = {};
                let i = 0;
                calendar.colors.forEach((color: string) => {
                    c[color] = swatch[i];
                    i++;
                });
                setColors(c);
            })
            .catch(() => {});
    }, []);

    const hasWindow = typeof window !== "undefined";
    const getWindowDimensions = (): {
        width: number | null;
        height: number | null;
    } => {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
            width,
            height,
        };
    };

    useEffect(() => {
        if (hasWindow) {
            const { width } = getWindowDimensions();

            const normalize = (
                val: number,
                max: number,
                min: number
            ): number => {
                const a = 35,
                    b = 12;
                if (max - min === 0) return a;
                return Math.min(
                    Math.max(a + ((val - min) * (b - a)) / (max - min), b),
                    a
                );
            };
            if (width === null) {
                return;
            }
            setZoom(normalize(width, 1024, 600));
        }
    }, [hasWindow]);

    return (
        <div style={{ width: "100%", height: "300px" }}>
            <Canvas camera={{ position: [0, 0, zoom] }}>
                <Controls />
                <ambientLight color="#ffffff" intensity={0.08} />
                <hemisphereLight
                    color="#ffffff"
                    groundColor="#080820"
                    intensity={0.9}
                />
                {contributions.map((c, i) => {
                    const x = Math.floor(i / 7) * 1 - 26;
                    const y = 7 - Math.floor(i % 7) * 1 - 4;
                    const z = 0; //c.contributionCount / ((total / 365) * 10);

                    return (
                        <mesh
                            key={c.date}
                            position={[x, y, z]}
                            rotation={[Math.PI * 0.5, 0, 0]}
                        >
                            <cylinderBufferGeometry
                                attach="geometry"
                                args={[0.3, 0.3, 0.01, 20]}
                            />
                            <meshStandardMaterial
                                attach="material"
                                color={
                                    colors[c.color] || swatch[swatch.length - 1]
                                }
                            />
                        </mesh>
                    );
                })}
            </Canvas>
        </div>
    );
};

export default Contributions;
