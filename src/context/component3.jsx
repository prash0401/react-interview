import { useContext } from "react";
import { UserContext } from "./component1";

function SecondChildComponent() {
  const user = useContext(UserContext);
  return (
    <>
      <div>component3</div>
      <h1>
        Hi my name is : {user}, I am using context to pass the value in props
      </h1>
    </>
  );
}

export default SecondChildComponent;
