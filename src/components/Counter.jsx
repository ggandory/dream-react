import React, { useState } from "react";

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);
  //useState(0)에서 prop으로 인자가 0이 계속 전달되는게 아닌가? 이해가 안가네
  return (
    <div ClassName="counter">
      <p className="number">
        {count} <span className="total">/{total}</span>
      </p>
      <button
        className="button"
        onClick={() => {
          //setCount(count + 1);
          //만약에 5번을 연속으로 콜백해서 5를 만들고 싶다면?
          setCount((prev) => {
            return prev + 1;
          });
          onClick();
          //setCount((prev) => prev + 1); 위에랑 같은 표현인거임
        }}
      >
        Add +
      </button>
    </div>
  );
}
