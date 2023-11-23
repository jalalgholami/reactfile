import React, { useState, useEffect } from 'react';

function Factorial() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const calculateFactorial = (num) => {
      let factorial = 1;
      for (let i = 1; i <= num; i++) {
        factorial *= i;
      }
      return factorial;
    };

    const num = 10; // عددی که می‌خواهید فاکتوریل آن را محاسبه کنید
    const factorialResult = calculateFactorial(num);
    setResult(factorialResult);
    alert(`نتیجه: ${factorialResult}`);
  }, []);

  return (
    <div>
      {/* محتوای کامپوننت */}
    </div>
  );
}

export default Factorial;
