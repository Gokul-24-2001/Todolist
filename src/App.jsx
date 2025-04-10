import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [addItem, setAddItem] = useState("");
  const [items, setItems] = useState([]);
  const handleChange = (e) => {
    setAddItem(e.target.value);
  };
  const handleClick = () => {
    if (addItem.length > 0) {
      setItems(() => [...items, addItem]);
      setAddItem("");
    }
  };

  const deleteItem = (id) => {
    setItems((previtems) => {
      return previtems.filter((item, index) => {
        return index !== id;
      });
    });
  };
  const baseStyle = {
    backgroundColor: "white",

    padding: "10px",
    width: "400px",
    height: "400px",
    borderRadius: "10px",
    maxWidth: "600px",
    minWidth: " 200px",
  };
  console.log(items);
  return (
    <div style={baseStyle}>
      <div className="container">
        <input
          type="text"
          value={addItem}
          name="fruitname"
          onChange={handleChange}
          placeholder="enter fruit name"
          id="fruitname"
        />
        <button onClick={handleClick}>click</button>
      </div>
      {items.map((item, index) => {
        return (
          <div className="container-fluid">
            <ul key={index}>
              <li>{item}</li>
            </ul>

            <p onClick={() => deleteItem(index)}>del</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
