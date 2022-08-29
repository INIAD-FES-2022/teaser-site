import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useRect = () => {
    const [rect, setRect] = useState<DOMRect>();
    const ref = useRef<HTMLDivElement | null>(null);

    const resize = useCallback(() => {
        if (ref.current) {
            const newRect = ref.current.getBoundingClientRect();
            setRect(newRect);
        }
    }, []);
    useEffect(() => resize(), []);

    const handleResize = useDebounce(resize, 16);
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    return { ref, rect };
};
