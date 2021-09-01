import React, { useState } from "react";
import Navbar from "./Navbar.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import AddItem from "./AddItem";
import AddVechicle from "./AddVechicle";
import Order from "./Order";
import { useStateValue } from "./StateProvider";
import "./styles.css";
export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/addvechicle">
          <AddVechicle />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/">
          <AddItem />
        </Route>
      </Switch>
    </Router>
  );
}
