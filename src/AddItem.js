import "./styles.css";
import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import Table from "./Table";
export default function AddItem() {
  const [{ items }, dispatch] = useStateValue();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState(1);
  const rows = ["id", "name", "price"];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length <= 0 || price <= 0) {
      alert("feild length should not be 0");
    } else {
      setId(id + 1);
      dispatch({
        type: "ADD_ITEMS",
        items: {
          id,
          name,
          price
        }
      });
      console.log(items);

      setName("");
      setPrice("");
    }
  };
  return (
    <div className="w3-margin w3-row ">
      <h1 className="w3-center">Add Item</h1>
      <div className="w3-col l6">
        <div className=" w3-card ">
          <p className="w3-large">
            <label>Item Name</label>
            <input
              className="w3-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </p>
          <p className="w3-large">
            <label>Item Price</label>
            <input
              className="w3-input"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </p>
          <div className="button w3-center ">
            <button
              onClick={handleSubmit}
              className="w3-padding w3-large w3-hover-teal "
            >
              <span> Submit</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w3-col l6">
        <Table data={items} rows={rows} />
      </div>
    </div>
  );
}
