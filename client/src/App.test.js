import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Switch, Link, Route, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const Login = () => <h1>Login Page</h1>;
const Registr = () => <h1>Registr Page</h1>;
const Profiles = () => <h1>Profiles Page</h1>;
const Dashboard = () => <h1>Dashboard Page</h1>;
const Users = () => <h1>Users Page</h1>;
const User = () => <h1>Current User Page</h1>;

const user = {
  isAuth: false,
  role: "ADMIN",
};

const RouterComponent = () => (
  <>
    <nav data-testid="navbar">
      <Link data-testid="login-link" to="/">
        Login
      </Link>
      <Link data-testid="registration-link" to="/registration">
        Reg
      </Link>
    </nav>

    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/registration" component={Registr} />
    </Switch>
  </>
);

describe("React Router", () => {
  it("should render the login page", () => {
    const history = createMemoryHistory();
    const { container, getByTestId } = render(
      <Router history={history}>
        <RouterComponent />
      </Router>
    );
    const navbar = getByTestId("navbar");
    const link = getByTestId("login-link");
    expect(container.innerHTML).toMatch("Login Page");
    expect(navbar).toContainElement(link);
  });
});
