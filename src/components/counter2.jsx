import HOC from "../utils/HOC/higherOrderComp";

const Counter2 = ({ count, handleCount }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleCount}>Increment counter 2</button>
    </div>
  );
};
export default HOC(Counter2);
