import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { Container } from "react-bootstrap";
import userOperations from "../../http/user/userOperations";
import profilesOperations from "../../http/profiles/profilesOperations";

export default function User() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(userOperations.getAllUsers());
  }, [dispatch]);

  const user = id ? users.find((u) => u.id === +id) : null;

  useEffect(() => {
    dispatch(userOperations.getUser({ user, id }));
  }, [dispatch, user, id]);

  const editUser = (e) => {
    e.preventDefault();
    dispatch(userOperations);
  };

  return (
    <>
      <NavBar />
      <Container>
        {user ? (
          <div>
            <p>{user.email}</p>
            <p>{user.role}</p>
            <button type="button">edit</button>
            <button type="button">delete</button>
          </div>
        ) : (
          <p>Can't find user</p>
        )}
        <h3>Profiles:</h3>
        <div></div>
      </Container>
    </>
  );
}

// const getProfiles = useSelector((state) => state.profiles);
// console.log(getProfiles);
// useEffect(() => {
//   dispatch(profilesOperations.getProfiles());
// }, [dispatch]);
