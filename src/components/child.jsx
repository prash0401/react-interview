import { memo } from "react";

const Child = ({ count, click, values }) => {
  console.log("Child rendered", values);
  return (
    <div className="child">
      <p>
        Hi i am child count is: {count} and child value : {values}
      </p>
      <button onClick={click}>Click child</button>
    </div>
  );
};
export default memo(Child);
