import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import Profiles from "./pages/Profiles/Profiles";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users/Users";
import User from "./pages/User/User";
import NavBar from "./components/NavBar";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <Fragment>
      {user.isAuth ? <NavBar /> : ""}
      {!user.isAuth ? (
        <Switch>
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/login" component={Login} />
          <Redirect to="/login" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/profiles" component={Profiles} />
          {user.role === "ADMIN" && (
            <Route exact path="/dashboard" component={Dashboard} />
          )}
          {user.role === "ADMIN" && (
            <Route exact path="/users" component={Users} />
          )}
          {user.role === "ADMIN" && (
            <Route exact path="/users/:id" component={User} />
          )}
          <Redirect to="/profiles" />
        </Switch>
      )}
    </Fragment>
  );
}
export default App;
