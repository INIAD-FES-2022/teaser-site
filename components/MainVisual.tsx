import React, { useEffect, useRef } from "react";
import styles from "../styles/MainVisual.module.scss";

export const MainVisual = () => {
    const loopingClass = Object.keys(styles)
        .filter((className) => className.match(/looping\d/))
        .sort();
    const ref = useRef<HTMLDivElement>(null);

    const handleOnClick = () => {
        if (ref.current !== null) {
            console.log(
                getComputedStyle(ref.current).getPropertyValue("height"),
            );
        }
    };

    return (
        <>
            {/* TODO クラスのあて方を整理する */}
            <div ref={ref} className={`${styles.container} h-screen w-screen`}>
                {
                    <div className={`${styles.loopingContainer}`}>
                        {[...Array(8).keys()].map((numLoop) => (
                            // 8行
                            <div
                                // FIXME 完全に型安全なやり方は何なのだろう
                                // これでおかしくなることはないとは思うけれど
                                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                                className={`${styles[loopingClass[numLoop]]} ${
                                    styles.looping
                                } flex flex-nowrap gap-4`}
                                key={numLoop}
                            >
                                {[...Array(24).keys()].map((numLoopInside) => (
                                    // 24列
                                    <div className="flex" key={numLoopInside}>
                                        <p>INIAD-</p>
                                        <p>FES</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                }
            </div>
            <button type="button" onClick={handleOnClick}>
                button
            </button>
        </>
    );
};
