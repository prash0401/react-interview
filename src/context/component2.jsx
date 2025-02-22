import SecondChildComponent from "./component3";

function FirstChildComponent() {
  return (
    <>
      <div>component2</div>
      <SecondChildComponent/>
    </>
  );
}
export default FirstChildComponent;
