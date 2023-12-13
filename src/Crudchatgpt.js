import React, { useState } from "react";


export default function Crudchatgpt() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAdd = () => {
    const newItem = { name, email };
    setItems([...items, newItem]);
    setName("");
    setEmail("");
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setName(items[index].name);
    setEmail(items[index].email);
  };

  const handleUpdate = () => {
    if (isEditing && editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = { name, email };
      setItems(updatedItems);
      setEditIndex(null);
      setName("");
      setEmail("");
      setIsEditing(false);
    }
  };

  return (
    <div className="App">
      <h1>Hi</h1>
      <input
        type="text"
        value={name}
        onChange={handleName}
        placeholder="Enter your name"
      />
      <input
        type="text"
        value={email}
        onChange={handleEmail}
        placeholder="Enter your email"
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Update Item</button>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Cancel Edit" : "Edit"}
      </button>

      <ul>
        {items.map((item, index) => (
          <div key={index}>
            <li>{item.name}</li>
            <li>{item.email}</li>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
