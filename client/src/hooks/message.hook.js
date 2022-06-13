import { useCallback } from "react";


export function useMessage() {
    return useCallback((text) => {
        if(text) {
            alert(text)
        }
    }, [])
}