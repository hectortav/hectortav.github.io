import { useEffect, useState } from "react";

const hashCode = (str: string): number => {
    let hash = 0,
        i,
        chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
};

const Readme = () => {
    const [lines, setLines] = useState<string[]>([]);
    const [content, setContent] = useState<string>("");
    const [hash, setHash] = useState<string>("");
    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/hectortav/hectortav/main/README.md"
        )
            .then((res) => res.text())
            .then((text) => {
                const h = hashCode(text).toString();
                const md = localStorage.getItem(h);
                if (md === null || md.length === 0) {
                    const markdown = text.replace(/<!--[\S\s]*-->/, "");
                    setLines(markdown.split("\n"));
                    setHash(h);
                } else {
                    setContent(md);
                }
            });
    }, []);
    useEffect(() => {
        setContent("");
        if (lines.length === 0) {
            return;
        }
        lines.map((line, index) => {
            if (line === "") {
                line = "</div><div class='flex flex-row mb-2'>";
            }

            const linkRegEx =
                /\((https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))\)/;
            const mdLinkRegEx =
                /!?\[[^\[\]]*\]\(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)\)/;
            let link = line.match(mdLinkRegEx);
            while (link !== null) {
                let replacement;
                if (link[0][0] === "!") {
                    replacement = `<img src="${
                        link[0].match(linkRegEx)?.[1]
                    }" alt="${link[0].match(/\[([^\[\]]*)\]/)?.[1]}"/>`;
                } else {
                    replacement = `<a href="${link[0].match(linkRegEx)?.[1]}">${
                        link[0].match(/\[([^\[\]]*)\]/)?.[1]
                    }</a>`;
                }
                line = line.replace(mdLinkRegEx, replacement);
                link = line.match(mdLinkRegEx);
            }
            const isListItem = (line: string): number => {
                let i = 0;
                while (line[i] === " ") {
                    i++;
                }
                if (line[i] === "-" && line[i + 1] === " ") {
                    return i;
                }
                return -1;
            };
            if (isListItem(line) >= 0) {
                let templine =
                    "<li>" +
                    line.trim().split(" ").slice(1).join(" ") +
                    "</li>";
                if (isListItem(lines[index - 1]) < isListItem(line)) {
                    templine =
                        "<ul class='list-disc' style='margin-left: 1rem;'>" +
                        templine;
                }
                if (
                    index === lines.length - 1 ||
                    isListItem(line) > isListItem(lines[index + 1])
                ) {
                    templine = templine + "</ul>";
                }
                line = templine;
            }

            if (
                line[0] === "#" &&
                [...new Set(line.split(" ")[0])].length === 1
            ) {
                let size;
                switch (line.split(" ")[0].length) {
                    case 1:
                        size = "2rem";
                        break;
                    case 2:
                        size = "1.7rem";
                        break;
                    default:
                        size = "1.5rem";
                        break;
                }
                line =
                    `<div style="font-size: ${size};" class="flex flex-row">` +
                    line.split(" ").slice(1).join(" ") +
                    "</div>";
            }
            line = line.replace(
                /\~(\w*)~/g,
                "<span style='text-decoration: line-through;'>$1</span>"
            );
            if (index === 0) {
                line = "<div class='flex flex-row mb-2'>" + line;
            }
            if (index === lines.length - 1) {
                line = line + "</div>";
            }

            setContent((c) => c + line);

            if (index === lines.length - 1 && hash.length > 1) {
                localStorage.setItem(hash, content);
            }
        });
    }, [lines]);
    return (
        <div id="readme" className="border-b border-slate-400">
            <h3 className="text-lg font-light mt-20">§ Readme</h3>
            <div className="my-10">
                <div
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                ></div>
            </div>

            <div className="mt-4 mb-4 text-sm">
                This is pulled directly from Github README and compiled as
                Markdown.{" "}
                <a
                    target="_blank"
                    href="https://github.com/hectortav/hectortav.github.io/blob/master/src/pages/Readme/index.tsx"
                    className="text-base underline text-sky-600 hover:no-underline hover:text-sky-600"
                >
                    Check out how this is done
                </a>{" "}
                directly in the front-end.
            </div>
        </div>
    );
};

export default Readme;
