import React, { useState } from "react";
import Form from "./Form/Form";
import List from "./List/List";

function App() {
  const [data, setData] = useState([]);

  const addDataHandler = (savedData) => {
    setData((prevData) => {
      return [savedData, ...prevData];
    });
  };

  return (
    <div>
      <Form onAddData={addDataHandler} />
      <List items={data} />
    </div>
  );
}

export default App;
