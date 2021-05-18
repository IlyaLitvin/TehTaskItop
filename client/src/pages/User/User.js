import React from "react";
import { Container } from "react-bootstrap";
import Profiles from "../Profiles/Profiles";

export default function User({deleteUser,id,user,setModalVisible}) {
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
    </Container>
  );
}
