import React, { useState, useMemo } from 'react';

function useMemoTest() {
  const [number, setNumber] = useState(1);

  // Функция для дорогостоящих вычислений
  const computeExpensiveValue = (num) => {
    console.log('Computing...');
    // Имитируем дорогостоящие вычисления
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num;
    }
    return result;
  };

  // Мемоизируем результат вычислений
  const memoizedValue = useMemo(() => computeExpensiveValue(number), [number]);

  return (
    <div>
      <h1>Expensive Computation</h1>
      <p>Computed Value: {memoizedValue}</p>
      <button onClick={() => setNumber(number + 1)}>Increment Number</button>
    </div>
  );
}

export default useMemoTest;
