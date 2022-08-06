import React, { FC, FunctionComponent,ReactNode, useState } from "react";
import styles from "../styles/Terminal.module.scss";

type Props = {
    children: ReactNode;
    size?: "Small" | "Medium" | "Large";
    isDeletable?: boolean;
    isMinimizable?: boolean;
};

export const Terminal: FC<Props> = ({
    children,
    size="Medium",
    isDeletable =false,
    isMinimizable=false,
}) => {
    // ターミナル風の何かに表示されている様な見た目にする
    // sizeは指定がなければ"Medium"になる
    // TODO sizeの指定で大きさを調整出来るようにしたい
    // isDeletable(default:false)がtrueなら×をクリックすることでこのコンポーネントは削除される
    // isMinimize(default:false)がtrueなら_をクリックすると最小化?っぽい見た目になって、その状態で□をクリックすると元に戻る

    const [isDeleted, setIsDeleted] = useState(false);
    const [isMinimize, setIsMinimize] = useState(false);

    return (
        // 空のfragment(<></>)を使うなって怒られるけれど、
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {!isDeleted && (
                <div className={`${styles.terminal} flex flex-col`}>
                    <div
                        className={`${styles.terminalTop} ${
                            isMinimize ? "rounded-md" : "rounded-t-md"
                        } flex h-6 w-full flex-row-reverse items-center`}
                    >
                        <button
                            type="button"
                            className={`${styles.terminalTopX} flex h-full w-8 items-center justify-center`}
                            onClick={() => {
                                if (isDeletable) {
                                    setIsDeleted(true);
                                }
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeWidth={2}
                                    d="M3,3 L21,21 M3,21 L21,3"
                                />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="terminal-top--□ flex h-full w-8 items-center justify-center"
                            onClick={() => {
                                if (isMinimizable) {
                                    setIsMinimize(false);
                                }
                            }}
                        >
                            <div className="m-1 border-2 border-solid border-white py-1 px-1.5" />
                        </button>
                        <button
                            type="button"
                            className="terminal-top--_ flex h-full w-8 flex-col-reverse items-center"
                            onClick={() => {
                                if (isMinimizable) {
                                    setIsMinimize(true);
                                }
                            }}
                        >
                            {/* <div className="m-2 border-b-2 border-solid border-white" /> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <line
                                    x1={4}
                                    y1={14}
                                    x2={20}
                                    y2={14}
                                    stroke="#FFF"
                                    strokeWidth={2}
                                />
                                {/* <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeWidth={2}
                                    d="M6,12 L18,12"
                                /> */}
                            </svg>
                        </button>
                    </div>
                    {!isMinimize && (
                        <div className="terminal-content p-1">{children}</div>
                    )}
                </div>
            )}
        </>
    );
};
