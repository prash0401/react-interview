import "./App.css";
import Counter1 from "./components/counter1";
import Counter2 from "./components/counter2";
import Parent from "./components/parent";
import Counter from "./container/count/count";
import ContextParentComponent from "./context/component1";
import FocusUsingRef from "./UseRef/focusUsingRef";
import ImageUploader from "./UseRef/imageUploader";

function App() {
  return (
    <>
      <ImageUploader />
      <Parent />
      <Counter1 />
      <Counter2 />
      <Counter />
      <ContextParentComponent />
      <FocusUsingRef />
    </>
  );
}

export default App;
