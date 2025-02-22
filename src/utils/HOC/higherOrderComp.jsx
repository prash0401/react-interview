import { useState } from "react";

const HOC = (Component) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);
    const handleCount = () => {
      setCount(count + 1);
    };
    return (
      <div>
        <Component count={count} handleCount={handleCount} />
      </div>
    );
  };
  return NewComponent;
};
export default HOC;
