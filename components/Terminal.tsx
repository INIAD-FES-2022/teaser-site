import React, { FC, ReactNode } from "react";
import styles from "../styles/Terminal.module.scss";

type Props = {
    children: ReactNode;
};

export const Terminal: FC<Props> = ({ children }) => {
    const hoge = 0;

    return (
        <div
            className={`${styles.terminal} relative flex flex-col bg-slate-800`}
        >
            <div className="terminal-top flex h-6 w-full flex-row-reverse items-center">
                <div className="terminal-top--x relative flex h-full w-8 items-center justify-center bg-red-500">
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
                </div>
                <div className="terminal-top--□ flex h-full w-8 items-center justify-center bg-slate-400">
                    <div className="m-1 border-2 border-solid border-white py-1 px-2" />
                </div>
                <div className="terminal-top--_ flex h-full w-8 flex-col-reverse bg-slate-400">
                    <div className="m-2 border-b-2 border-solid border-white" />
                </div>
            </div>
            <div className="terminal-content p-4">{children}</div>
        </div>
    );
};
