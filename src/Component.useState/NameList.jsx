import { useState } from "react";

function NameList() {
  const [list, setList] = useState(["Luiz", "Felipe", "Royer"]);
  const [name, setName] = useState("")  


  const onAddName = () => {
    setList([...list, name])
    setName("")
  }

  return (
    <>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
      type ="text"
      value={name}
      onChange={(e) => setName(e.target.value)} />
      <button
      onClick={onAddName}>
        Add Name
      </button>
    </>
  );
}

export default NameList;