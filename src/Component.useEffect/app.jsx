/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import EditFruit from "./EditFruit";

export default function UseEffect() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("/names.json")
      .then((res) => res.json())
      .then((data) => setNames(data));
  }, []);

  const [selectName, setSelectName] = useState(null);


  return (
    <>
      <h1>Use Effect</h1>
      <>
        {"Fruits "}
        {names.map((name) => (
          <button onClick={() => setSelectName(name)}>{name}</button>
        ))}
      </>   <br/>
      <>{selectName}</>
      <br/>
      <EditFruit selectedName={selectName}/>
    </>
  );
}
