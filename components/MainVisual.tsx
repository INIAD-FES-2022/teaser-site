import React from "react";
import styles, { looping0 } from "../styles/MainVisual.module.scss";

export const MainVisual = () => {
    const loopingClass = Object.keys(styles)
        .filter((className) => className.match(/looping\d/))
        .sort();

    return (
        <div className={`${styles.container} h-screen`}>
            {[...Array(8).keys()].map((numLoop) => (
                <div
                    // FIXME 完全に型安全なやり方は何なのだろう
                    // これでおかしくなることはないとは思うけれど
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    className={`${styles[loopingClass[numLoop]]} flex gap-4`}
                    // {styles[`hypehn${variantK}`]}
                    key={numLoop}
                >
                    {[...Array(12).keys()].map((numLoopInside) => (
                        <p key={numLoopInside}>INIAD-FES</p>
                    ))}
                </div>
            ))}
        </div>
    );
};
