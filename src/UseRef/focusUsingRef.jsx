import { useRef } from "react";
function FocusUsingRef() {
  const inputElement = useRef("");
  const handleFocus = () => {
    // inputElement.current.focus();
    console.log("inputElement", inputElement.current.value);
  };
  return (
    <div>
      <p>Hi this is UseRef example</p>
      <input type="text" ref={inputElement} />
      <button onClick={handleFocus}>click to focus input</button>
    </div>
  );
}

export default FocusUsingRef;
