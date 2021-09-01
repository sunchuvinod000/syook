import { useStateValue } from "./StateProvider";
import { useState } from "react";
import "./styles.css";
import { v4 } from "uuid";
import Table from "./Table";

export default function Order() {
  const [item, setItem] = useState({});
  const [random, setRandom] = useState("");
  const [{ items, vechicles, customers, orders }, dispatch] = useStateValue();
  const row = ["orderId", "itemId", "price", "customerId", "vechicleId"];
  const Option = (props) => {
    const { value } = props;
    return <option value={value}>{value}</option>;
  };

  const handleChange = (e) => {
    const a = items.filter((item) => item.name === e.target.value);
    setItem(a[0]);
    const randomVechicle =
      vechicles[Math.floor(Math.random() * vechicles.length)];

    setRandom(randomVechicle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      dispatch({
        type: "ADD_ORDER",
        orders: {
          orderId: v4(),
          itemId: item.id,
          price: item.price,
          customerId: customers.id,
          vechicleId: random.id
        }
      });
      console.log(orders);
      setItem({ id: "", name: "", price: "" });
      setRandom({});
    } else {
      alert("Please Select something...");
    }
  };
  return (
    <div className="w3-margin w3-row">
      <h1 className="w3-center ">Place Order</h1>

      <div className=" w3-col l6 w3-card w3-padding ">
        <div className="w3-row ">
          <div className="w3-col s6">
            <label className="w3-xxlarge">Choose a car:</label>
          </div>
          <div className="w3-col s6">
            <select value={item?.name} onChange={handleChange}>
              <option value="">---select---</option>
              {items.map((item) => {
                return <Option value={item?.name} />;
              })}
            </select>
          </div>
        </div>
        <div className="w3-row w3-margin-top">
          <div className="w3-col s6">
            <label className="w3-xxlarge">Item Id:</label>
          </div>
          <div className="w3-col s6">
            <input className="w3-input input w3-large" value={item?.id} />
          </div>
        </div>
        <div className="w3-row w3-margin-top">
          <div className="w3-col s6">
            <label className="w3-xxlarge">Price:</label>
          </div>
          <div className="w3-col s6">
            <input className="w3-input input w3-large" value={item?.price} />
          </div>
        </div>
        <div className="w3-row w3-margin-top">
          <div className="w3-col s6">
            <label className="w3-xxlarge">Customer Id:</label>
          </div>
          <div className="w3-col s6">
            <input className="w3-input input w3-large" value={customers.id} />
          </div>
        </div>
        <div className="w3-row w3-margin-top">
          <div className="w3-col s6">
            <label className="w3-xxlarge">Delivery vechicle Id:</label>
          </div>
          <div className="w3-col s6">
            <input className="w3-input input w3-large" value={random.reg} />
          </div>
        </div>

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
        <Table data={orders} rows={row} />
      </div>
    </div>
  );
}
