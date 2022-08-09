import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/MainVisual.module.scss";

// import { useRect } from "../service/useRect";

export const MainVisual = () => {
    const loopingClass = Object.keys(styles)
        .filter((className) => className.match(/looping\d/))
        .sort();
    const ref0 = useRef<HTMLDivElement | null>(null);
    const ref1 = useRef<HTMLDivElement | null>(null);
    const ref2 = useRef<HTMLDivElement | null>(null);
    const ref3 = useRef<HTMLDivElement | null>(null);
    const ref4 = useRef<HTMLDivElement | null>(null);
    const ref5 = useRef<HTMLDivElement | null>(null);
    const ref6 = useRef<HTMLDivElement | null>(null);
    const ref7 = useRef<HTMLDivElement | null>(null);

    const refList = [ref0, ref1, ref2, ref3, ref4, ref5, ref6, ref7];
    const [widthList, setWidthList] = useState<number[]>([]);
    useEffect(() => {
        setWidthList(
            refList.map((ref) => {
                if (ref.current !== null) {
                    return Number(ref.current.clientWidth);
                }

                return -1;
            }),
        );
        console.log(widthList);
    }, [refList[0].current]);

    const loopDataList = [...Array(8).keys()].map((i) => ({
        style: {
            "--loop-width": `${widthList[i] ?? 1000}px`,
        } as React.CSSProperties,
        ref: refList[i],
    }));

    // {/* TODO クラスのあて方を整理する */}
    return (
        <div className={`${styles.container} h-screen w-screen`}>
            {loopDataList.map(({ style, ref }, i) => (
                <div
                    ref={ref}
                    // FIXME 完全に型安全なやり方は何なのだろう
                    // これでおかしくなることはないとは思うけれど
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    className={`${styles[loopingClass[i]]} ${
                        styles.looping
                    } flex flex-nowrap gap-4`}
                    key={i}
                    style={style}
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
    );
};
