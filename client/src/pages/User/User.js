import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import userOperations from "../../http/user/userOperations";
import profilesOperations from "../../http/profiles/profilesOperations";
import UserModal from "../../components/UserModal";
import Profiles from "../Profiles/Profiles";

export default function User() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const [modalVisible, setModalVisible] = useState({
    isModalOpen: false,
    id: "",
  });

  useEffect(() => {
    dispatch(userOperations.getAllUsers());
  }, [dispatch]);

  const user = id ? users.find((u) => u.id === +id) : null;

  useEffect(() => {
    dispatch(userOperations.getUser({ user, id }));
  }, [dispatch, user, id]);

  const deleteUser = (e) => {
    dispatch(userOperations.deleteUser(e));
    alert("User was delete");
    history.push("/users");
  };

  return (
    <Container>
      {user ? (
        <div>
          <p>{user.email}</p>
          <p>{user.role}</p>
          <button
            type="button"
            onClick={() => setModalVisible({ isModalOpen: true, id: user.id })}
          >
            edit
          </button>
          <button type="button" onClick={() => deleteUser(user.id)}>
            delete
          </button>
        </div>
      ) : (
        <p>Can't find user</p>
      )}
      <Profiles id={id} />
      <UserModal
        modalOptions={modalVisible}
        onHide={() => setModalVisible({ isModalOpen: false })}
      />
    </Container>
  );
}

// const getProfiles = useSelector((state) => state.profiles);
// console.log(getProfiles);
// useEffect(() => {
//   dispatch(profilesOperations.getProfiles());
// }, [dispatch]);
