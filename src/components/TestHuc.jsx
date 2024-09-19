import { useCount } from "../hooks/use-count";

const TestHuc = () => {
    const {count, increment, decrement} = useCount(0);
    return (
        <div>
            <button onClick={increment}>{count}</button>
            <button onClick={decrement}>{count}</button>
        </div>
    );
};
export default TestHuc;