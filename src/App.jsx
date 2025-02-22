import "./App.css";
import Counter1 from "./components/counter1";
import Counter2 from "./components/counter2";
import Parent from "./components/parent";
import Counter from "./container/count/count";

function App() {
  return (
    <>
      <Parent />
      <Counter1 />
      <Counter2 />
      <Counter />
    </>
  );
}

export default App;
