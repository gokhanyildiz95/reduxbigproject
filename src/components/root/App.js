import React from "react";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/cart" exact component={CartDetail}/>
        <Route path="/product" exact component={Dashboard}/>
      </Switch>
    </Container>
  );
}

export default App;
