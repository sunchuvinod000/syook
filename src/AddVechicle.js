import { useState } from "react";
import { useStateValue } from "./StateProvider";
import "./styles.css";
import { v4 } from "uuid";
import Table from "./Table";
export default function AddVechicle() {
  const [{ vechicles }, dispatch] = useStateValue();

  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [id, setId] = useState(1);
  const rows = ["id", "reg", "type", "location"];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (type.length <= 0 || location.length <= 0) {
      alert("feild length should not be 0");
    } else {
      setId(id + 1);
      const reg = v4();

      dispatch({
        type: "ADD_VECHICLES",
        vechicles: {
          id,
          reg,
          type,
          location
        }
      });
      console.log("vechicles", vechicles);

      setType("");
      setLocation("");
    }
  };
  return (
    <div>
      <div className="w3-margin w3-row">
        <h1 className="w3-center">Add Vechicle</h1>
        <div className="w3-col l6 w3-card">
          <p className="w3-large">
            <label>Vechicle type</label>
            <input
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w3-input"
              type="text"
            />
          </p>
          <p className="w3-large">
            <label>Location</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w3-input"
              type="text"
            />
          </p>
          <div className="button w3-center ">
            <button
              onClick={handleSubmit}
              className="w3-padding w3-large w3-hover-teal "
            >
              Submit
            </button>
          </div>
        </div>
        <div className="w3-col l6">
          <Table data={vechicles} rows={rows} />
        </div>
      </div>
    </div>
  );
}
