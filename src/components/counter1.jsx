import HOC from "../utils/HOC/higherOrderComp";

const Counter1 = ({ count, handleCount }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleCount}>Increment counter 1</button>
    </div>
  );
};
export default HOC(Counter1);
