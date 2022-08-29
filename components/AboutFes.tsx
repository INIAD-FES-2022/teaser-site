import React from "react";

import Image from "next/image";

import styles from "../styles/AboutFes.module.scss";
import { Terminal } from "./Terminal";
import { Matsu, Hexagon } from "./svg/svg";

export const AboutFes = () => (
    <div className={`${styles.container} flex flex-col p-4`}>
        <div className="flex flex-col items-center">
            <Terminal className="z-10 flex">
                <div className="relative text-center">
                    <div className="w-42">
                        <Hexagon className={`${styles.hexagon}`} />
                        <h2 className={`${styles.title} absolute w-full`}>
                            <span className="block text-2xl">第6回</span>
                            <span className="mt-1 text-4xl">INIAD-FES</span>
                        </h2>
                        <Matsu className={`${styles.matsu} absolute`} />
                    </div>
                </div>
            </Terminal>
            <div className="relative">
                <Terminal className={`${styles.ribbon} absolute w-screen`}>
                    <div className={`${styles.ribbonContent}`} />
                </Terminal>
            </div>
            <div className={`${styles.aboutFesContainer} mt-4 flex w-full`}>
                <div
                    className={`${styles.decorationA} flex w-full flex-col items-center gap-4`}
                >
                    <Terminal className="flex justify-center">
                        <Image
                            src="/images/壁掛け.svg"
                            alt=""
                            width={128}
                            height={256}
                            className={`${styles.tapestry}`}
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
                <div className={`${styles.aboutFes} flex flex-col gap-4`}>
                    <Terminal className="">
                        <article
                            className={`${styles.aboutFesContent} h-full p-4`}
                        >
                            <h2 className="text-2xl">INIAD-FESとは</h2>
                            <p className="break-words">{"あ".repeat(300)}</p>
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
                <div
                    className={`${styles.decorationB} flex w-full flex-col items-center gap-4`}
                >
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
);
