import "./App.css";
import React, { useState } from "react";

function App() {
  const [returnedData, setReturnedData] = useState(["hiii theeree"]);

  const getData = async (url) => {
    const newData = await fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json());
    console.log(newData);
    setReturnedData(newData.result);
  };

  const toggleMessage = () => {
  returnedData === "Good Bye" ? getData("/api") : getData("/quit");
  }

  return (
    <div className="App">
      <button onClick={() => toggleMessage()}>Click me</button>
      {returnedData}
    </div>
  );
}

export default App;
