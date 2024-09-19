import { useEffect } from "react";
import { useCount } from "../hooks/use-count";

const TestHuc = () => {
     const {count, increment, decrement} = useCount(0);
    useEffect(() => {
        const collback=() => {
            console.log("scrolling");
        }
         window.addEventListener("scroll", collback);

        return () => window.removeEventListener("scroll", collback);
    }, []);
    return (
        <div>
            <button onClick={increment}>{count}</button>
            <button onClick={decrement}>{count}</button>
        </div>
    );
};
export default TestHuc;