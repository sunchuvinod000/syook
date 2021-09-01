import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";

export default function Navbar() {
  const history = useHistory();
  const [{ customers, vechicles }, dispatch] = useStateValue();

  function HandleClick() {
    const loc = [];
    vechicles.map((item) => loc.push(item.location.toLowerCase()));

    if (loc.includes(customers.location.toLowerCase())) {
      history.push("/order");
    } else {
      alert("Delivery is not available at your location");
    }
  }

  return (
    <div className="w3-margin w3-padding w3-row">
      <p className=" w3-col l3 m5 s5">
        <Link className="w3-btn w3-hover-white " to="/">
          Add Item
        </Link>
      </p>
      <p className="w3-col l3 m5 s5">
        <Link className="w3-btn w3-hover-white" to="/addvechicle">
          Add Vechicle
        </Link>
      </p>

      <p className="w3-col l3 m5 s5">
        <span
          to="/order"
          onClick={HandleClick}
          className="w3-btn w3-hover-white"
        >
          Order
        </span>
      </p>
    </div>
  );
}
