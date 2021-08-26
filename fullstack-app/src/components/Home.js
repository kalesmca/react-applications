import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Counter from "./Counter";
import Greeting from "./Greetings";
import Users from "./Users";

export default function Home() {
  return (
    <div>
      <hr />

      <div>
        <Link className="btn btn-primary" to="/counter">
          Counter
        </Link>{" "}
        &nbsp;
        <Link className="btn btn-success" to="/greet">
          Greeting
        </Link>{" "}
        &nbsp;
        <Link className="btn btn-dark" to="/users">
          Users
        </Link>{" "}
        &nbsp;
      </div>
      <br />
      <div>
        <Switch>
          <Route exact path="/" component={Counter} />
          <Route path="/counter" component={Counter} />
          <Route path="/greet" component={Greeting} />
          <Route path="/users" component={Users} />
        </Switch>
      </div>
    </div>
  );
}
