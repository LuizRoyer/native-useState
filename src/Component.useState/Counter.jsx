import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <button onClick={() => setCount(count + 1)}> Count Click = {count}</button>
    </div>
  );
}

export default Counter;
