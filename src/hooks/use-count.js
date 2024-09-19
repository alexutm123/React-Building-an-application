import { useCallback, useState } from "react";

export function useCount(initialValue = 0) {
    
    const [count, setCount] = useState(initialValue);

    const increment =useCallback(() => setCount(count + 1),[count]);

    const decrement =useCallback(() => setCount(count -1),[count]);

    return {count, increment, decrement};
}