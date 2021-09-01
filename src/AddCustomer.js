import "./styles.css";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { useStateValue } from "./StateProvider";
export default function AddCustomer() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [id, setId] = useState(0);

  const [{ customers }, dispatch] = useStateValue();
  const history = useHistory();
  const handleSubmit = () => {
    history.push("/");
    if (name.length < 0 || location.length < 0) {
      alert("feild length should not be 0");
    } else {
      setId(id + 1);
      dispatch({
        type: "ADD_CUSTOMER",
        customers: {
          id,
          name,
          location
        }
      });
      console.log(customers);
      setName("");
      setLocation("");
    }
  };

  return (
    <div className="w3-container ">
      <h1 className="w3-center">Add Customer</h1>
      <div className="w3-card ">
        <p className="w3-large">
          <label>Your Name</label>
          <input
            className="w3-input"
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
          />
        </p>
        <p className="w3-large">
          <label>Your Location</label>
          <input
            className="w3-input"
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            value={location}
          />
        </p>
        <div className="button w3-center ">
          <button
            className="w3-padding w3-large w3-hover-teal "
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
