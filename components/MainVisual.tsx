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
    // "INIAD-FES INIAD-FES..."の列(.looping0, .looping1...)の横幅を管理するリスト
    // css変数を使用して渡し、アニメーション中の2要素の交換に利用してスクロールを実現する

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
    // refListではレンダリングがループしてしまうっぽいので

    const loopDataList = [...Array(8).keys()].map((i) => ({
        style: {
            "--loop-width": `${widthList[i]}px`,
        } as React.CSSProperties,
        ref: refList[i],
    }));

    // TODO クラスのあて方を整理する
    return (
        <article className={`${styles.container} relative h-screen w-full`}>
            {/* 使用する単位をvhに変更したことで、拡大縮小によるレイアウトの崩壊を考えなくてよくなった
                合計1 * 8 * 3 * 12 = 288個の"INIAD-FES"が並んでいることになる */}

            {/* <div className={`${styles.container}`}> */}
                {loopDataList.map(({ style, ref }, i) => {
                    const loopingClassName =
                        styles[loopingClass[i] as keyof typeof styles];

                    return (
                        <div
                            key={i}
                            className={`${loopingClassName} ${styles.loopingContainer} flex`}
                        >
                            {[...Array(3).keys()].map((j) => (
                                // REVIEW 何故かnext exportしてデプロイすると最後の要素が消える!!
                                // 取り敢えずは要素を3つにすることで3-1=2って感じに対応するけれど、原因を探りたい

                                // 2回繰り返しているだけ
                                // アニメーションのことを考えると、1つでは連続して流れている様には見えないだろうから、2つに増やして上手いこと動かしてなんとかする
                                // refは上書きされて1つ目のものではなく2つ目のloopElementsだけにあたっているけれど、横幅は同じ筈なので問題はないと思う

                                <div
                                    ref={ref}
                                    className={`${styles.looping} flex flex-nowrap gap-4 pl-4`}
                                    key={`${i}-${j}`}
                                    style={style}
                                >
                                    {[...Array(12).keys()].map((k) => (
                                        // 12列
                                        <p className="flex" key={k}>
                                            <span>INIAD-</span>
                                            <span>FES</span>
                                            {/* <p>INIAD-fes</p>では"-"のところで改行が入ってしまうので、flexで横並びにしている */}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    );
                })}
            {/* </div> */}
        </article>
    );
};
