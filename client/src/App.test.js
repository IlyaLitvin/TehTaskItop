import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Switch, Link, Route, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from './App'

const Login = () => <h1>Nastia</h1>;
const Registr = () => <h1>Registr Page</h1>;
const Profiles = () => <h1>Profiles Page</h1>;
const Dashboard = () => <h1>Dashboard Page</h1>;
const Users = () => <h1>Users Page</h1>;
const User = () => <h1>Current User Page</h1>;

const Home = () => <h1>Home page</h1>;
const About = () => <h1>About page</h1>;
const Error = () => <h1>404 Error</h1>;

const user = {
  isAuth: false,
  role: "ADMIN",
};

const RouterComponent = () => (
  <div data-testid="wrapper">
    <nav data-testid="navbar">
      <Link data-testid="loginLink" to="/">
        Login
      </Link>
      <Link data-testid="registration-link" to="/about">
        Reg
      </Link>
    </nav>

    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/registration" component={Registr} />
    </Switch>
  </div>
);

describe("React Router", () => {
  it("should render the login page", () => {
    const history = createMemoryHistory();
    const { container, getByTestId } = render(
      <Router history={history}>
        <RouterComponent />
      </Router>
    );
    const wrapper = getByTestId('wrapper');
    const navbar = getByTestId("navbar");
    const link = getByTestId("loginLink");
    expect(container.innerHTML).toMatch("Nastia");
    expect(wrapper.innerHTML).toContainElement(navbar);
    // expect(navbar).toBeInTheDocument();
  });
});

