import FirstChildComponent from "./component2";
import { createContext } from "react";

export const UserContext = createContext();

function ContextParentComponent() {
  return (
    <>
      <UserContext.Provider value="Prashant">
        <div>component1</div>
        <FirstChildComponent />
      </UserContext.Provider>
    </>
  );
}

export default ContextParentComponent;
