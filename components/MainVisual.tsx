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
    }, [refList[0].current]);

    const loopDataList = [...Array(8).keys()].map((i) => ({
        style: {
            "--loop-width": `${widthList[i]}px`,
        } as React.CSSProperties,
        ref: refList[i],
    }));

    // {/* TODO クラスのあて方を整理する */}
    return (
        <div className={`${styles.outerContainer} relative h-screen w-screen`}>
            {[...Array(4).keys()].map((h) => (
                // 4回繰り返す
                // 合計4 * 2 * 24 = 192個の"INIAD-FES"が並んでいることになる
                // 流石にここまですれば、拡大縮小でデザインが崩れることは変なことをしない限り起こらないと信じたい

                <div className={`${styles.container}`} key={h}>
                    {loopDataList.map(({ style, ref }, i) => (
                        <div
                            key={i}
                            // FIXME 完全に型安全なやり方は何なのだろう
                            // これでおかしくなることはないとは思うけれど
                            // NOTE 解決方法を模索する中で、https://vanilla-extract.style/ を見つけた、これでCSS周りを書き直せばなんとかなる気もする
                            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                            className={`${styles[loopingClass[i]]} ${
                                styles.loopingContainer
                            } flex gap-4`}
                        >
                            {[...Array(2).keys()].map((j) => (
                                // 2回繰り返しているだけ
                                // アニメーションのことを考えると、1つでは連続して流れている様には見えないだろうから、2つに増やして上手いこと動かしてなんとかする
                                // refは上書きされて1つ目のものではなく2つ目のloopElementsだけにあたっているけれど、横幅は同じ筈なので問題はないと思う
                                <div
                                    ref={ref}
                                    className={`${styles.looping} flex flex-nowrap gap-4`}
                                    key={`${i}-${j}`}
                                    style={style}
                                >
                                    {[...Array(24).keys()].map((num) => (
                                        // 24列
                                        <div className="flex" key={num}>
                                            <p>INIAD-</p>
                                            <p>FES</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
