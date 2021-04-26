import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import Profiles from "./pages/Profiles/Profiles";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users/Users";

import "./App";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/registration" component={Registration}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/profiles" component={Profiles}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/users" component={Users}></Route>
      </Switch>
    </Fragment>
  );
}
export default App;
