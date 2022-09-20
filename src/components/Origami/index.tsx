import { ReactElement } from "react";

interface SVGProps {
    width?: number;
    height?: number;
}

export const OrigamiBoat = ({
    width = 64,
    height = 64,
}: SVGProps): ReactElement => {
    return (
        <svg
            {...{ width, height }}
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: "currentcolor" }}
        >
            <path d="M4 34.56c0 .29.08.58.23.82l7.5 12.14a2.81 2.81 0 0 0 2.4 1.34h35.73c.99 0 1.88-.5 2.4-1.34l7.5-12.14c.22-.36.29-.78.19-1.18s-.35-.75-.7-.97c-.25-.15-.53-.23-.82-.23H47.79c-.34 0-.66-.15-.88-.42l-13.5-16.76a1.81 1.81 0 0 0-2.83 0l-13.5 16.76a1.1 1.1 0 0 1-.88.42H5.57C4.71 33 4 33.7 4 34.57Zm43.83 12.3H16.17L32 35.23l15.83 11.63Zm9.82-11.87-7.06 11.42-15.55-11.42h22.61Zm-12.97-2H32.99V18.48l11.69 14.51ZM30.99 18.48v14.51H19.3l11.69-14.51Zm-2.05 16.51L13.39 46.41 6.33 34.99h22.62Z" />
        </svg>
    );
};
