import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import routes from "../routes";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import authOperations from "../http/auth/authOperations";

function NavBar() {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(authOperations.logOut());
    history.push(routes.login);
  };

  return (
    <Navbar bg="dark" variant="dark">
      {user.role === "ADMIN" ? (
        <Container>
          <NavLink style={{ color: "white" }} to={routes.profiles}>
            Admin
          </NavLink>
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              className="mr-2"
              onClick={() => history.push(routes.profiles)}
            >
              Profiles
            </Button>
            <Button
              variant={"outline-light"}
              className="mr-2"
              onClick={() => history.push(routes.dashboard)}
            >
              Dashboard
            </Button>
            <Button
              variant={"outline-light"}
              onClick={() => history.push(routes.users)}
            >
              Users
            </Button>
            <Button
              variant={"outline-light"}
              className="ml-5"
              onClick={() => logOut()}
            >
              Log out
            </Button>
          </Nav>
        </Container>
      ) : (
        <Container>
          <NavLink style={{ color: "white" }} to={routes.profiles}>
            User
          </NavLink>
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              className="mr-2"
              onClick={() => history.push(routes.profiles)}
            >
              Profiles
            </Button>
            <Button variant={"outline-light"} className="ml-5" onClick={logOut}>
              Log out
            </Button>
          </Nav>
        </Container>
      )}
    </Navbar>
  );
}

export default NavBar;
