import { useCallback, useMemo, useState } from "react";
import Child from "./child";
console.log("Parent rendered");
const Parent = () => {
  const [input, setInput] = useState(10);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleChangeNum = (e) => {
    setInput(Number(e.target.value));
  };

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleCount2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  const childMemoFunc = useMemo(() => {
    return input * input;
  }, [input]);

  return (
    <div className="parent">
      <p>Hi i am Parent count is: {count}</p>
      <button onClick={handleCount}>Click parent</button>
      <input type="number" value={input} onChange={handleChangeNum} />
      <Child count={count2} click={handleCount2} value={childMemoFunc} />
    </div>
  );
};
export default Parent;
