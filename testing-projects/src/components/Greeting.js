import Output from "./Output";
import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello world</h2>
      {!changedText && <Output>Its good to see you!</Output>}
      {changedText && <Output>Changed</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};

export default Greeting;
