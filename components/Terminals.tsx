import React from "react";

import Image from "next/image";

import styles from "../styles/Terminals.module.scss";
import { Terminal } from "./Terminal";
import { Matsu, Hexagon } from "./svg/svg";

export const Terminals = () => {
    const hoge = "hoge";

    return (
        <Terminal>
            <div className={`${styles.mainContent} flex flex-col p-4`}>
                <div className="flex flex-col items-center">
                    <Terminal className="z-10 flex">
                        <div className="relative text-center">
                            <div className="w-42">
                                <Hexagon className={`${styles.hexagon}`} />
                                <h2
                                    className={`${styles.title} absolute w-full`}
                                >
                                    <span className="block text-2xl">
                                        第6回
                                    </span>
                                    <span className="mt-1 text-4xl">
                                        INIAD-FES
                                    </span>
                                </h2>
                                <Matsu className={`${styles.matsu} absolute`} />
                            </div>
                        </div>
                    </Terminal>
                    <div className="relative">
                        <Terminal
                            className={`${styles.ribbon} absolute w-screen`}
                        >
                            <div className={`${styles.ribbonContent}`} />
                        </Terminal>
                    </div>
                    <div className="mx-8 mt-4 flex w-full justify-between gap-4">
                        <div className="flex flex-col gap-4">
                            <Terminal>
                                <Image
                                    src="/images/壁掛け.svg"
                                    alt=""
                                    width={128}
                                    height={256}
                                />
                            </Terminal>
                            <Terminal>
                                <Image
                                    src="/images/提灯1.svg"
                                    alt=""
                                    width={128}
                                    height={128}
                                />
                            </Terminal>
                        </div>
                        <div
                            className={`${styles.aboutFesContainer} flex flex-col gap-4`}
                        >
                            <Terminal className={`${styles.aboutFes}`}>
                                <article
                                    className={`${styles.aboutFesContent} h-full p-4`}
                                >
                                    <h2 className="text-2xl">INIAD-FESとは</h2>
                                    <p className="break-words">
                                        {"hoge".repeat(224)}
                                    </p>
                                </article>
                            </Terminal>
                            <div className="flex justify-evenly">
                                <Terminal>
                                    <Image
                                        src="/images/扇子.svg"
                                        alt=""
                                        width={128}
                                        height={128}
                                    />
                                </Terminal>
                                <Terminal>
                                    <Image
                                        src="/images/扇子.svg"
                                        alt=""
                                        width={128}
                                        height={128}
                                    />
                                </Terminal>
                                <Terminal>
                                    <Image
                                        src="/images/扇子.svg"
                                        alt=""
                                        width={128}
                                        height={128}
                                    />
                                </Terminal>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Terminal>
                                <Image
                                    src="/images/壁掛け.svg"
                                    alt=""
                                    width={128}
                                    height={256}
                                />
                            </Terminal>
                            <Terminal>
                                <Image
                                    src="/images/提灯1.svg"
                                    alt=""
                                    width={128}
                                    height={128}
                                />
                            </Terminal>
                        </div>
                    </div>
                </div>
            </div>
        </Terminal>
    );
};
