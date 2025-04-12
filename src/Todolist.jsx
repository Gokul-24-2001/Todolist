import React from "react";
import "./App.css";
import { useState } from "react";
function Todolist() {
  const [addItem, setAddItem] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const handleChange = (e) => {
    setAddItem(e.target.value);
  };
  const handleClick = () => {
    if (addItem.length > 0) {
      setItems(() => [...items, addItem]);
      setAddItem("");
    }
    if (editIndex !== null) {
      const updatingitem = [...items];
      updatingitem[editIndex] = addItem;
      setItems(updatingitem);
      setEditIndex(null);
    }
  };

  const deleteItem = (id) => {
    setItems((previtems) => {
      return previtems.filter((item, index) => {
        return index !== id;
      });
    });
  };
  const updateItem = (index) => {
    setAddItem(items[index]);
    setEditIndex(index);

    // console.log(id)
  };
  const baseStyle = {
    backgroundColor: "white",
    padding: "10px",
    width: "400px",
    height: "auto",
    borderRadius: "10px",
  };
  console.log(items);
  return (
    <div>
      <div style={baseStyle}>
        <h1 style={{ color: "black", textAlign: "center" }}> Todo List</h1>
        <div className="container">
          <input
            type="text"
            value={addItem}
            name="fruitname"
            onChange={handleChange}
            placeholder="enter fruit name"
            id="fruitname"
          />
          <button onClick={handleClick}>
            {editIndex !== null ? (
              <p style={{ color: "red" }}>update</p>
            ) : (
              "Add"
            )}
          </button>
        </div>
        {items.map((item, index) => {
          return (
            <div className="container-fluid">
              <ul key={index}>
                <li>{item}</li>
              </ul>

              <p onClick={() => deleteItem(index)}>delete</p>
              <p onClick={() => updateItem(index)}>update</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todolist;
