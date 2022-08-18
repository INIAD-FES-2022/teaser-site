import React, { FC } from "react";
import styles from "../../styles/svg.module.scss";

type Props = {
    className?: string;
    width?: string;
    height?: string;
};

export const Hexagon: FC<Props> = ({
    className = "",
    width = "100%",
    height = "100%",
}) => (
    <svg
        width={width}
        height={height}
        viewBox="-150 -150 260 300"
        version="1.1"
        id="svg4"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.hexagon} ${className}`}
    >
        <path
            d="M 110,75 -20,150 -150,75 V -75 l 130,-75 130,75 z"
            id="path2"
        />
        <path
            d="M 104.01292,71.430914 -19.99953,142.86133 -144.0129,71.430914 V -71.42995 l 124.01337,-71.43046 124.01245,71.43046 z"
            id="path2-1"
            // style="stroke:#ffb700;stroke-width:2"
            className={`${styles.hexagonStroke}`}
        />
    </svg>
);
