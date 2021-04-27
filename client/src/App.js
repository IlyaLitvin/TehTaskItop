import { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import Profiles from "./pages/Profiles/Profiles";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users/Users";

import "./App";

function App() {
  let isAuth = false;
  const role = "";
  return (
    <Fragment>
      {!isAuth ? (
        <Switch>
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/login" component={Login} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/profiles" component={Profiles} />
          {role === "ADMIN" && (
            <Route exact path="/dashboard" component={Dashboard} />
          )}
          {role === "ADMIN" && <Route exact path="/users" component={Users} />}
          <Redirect to="/profiles" />
        </Switch>
      )}
    </Fragment>
  );
}
export default App;
