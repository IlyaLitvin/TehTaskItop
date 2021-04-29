import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import { Container, Button } from "react-bootstrap";
import styles from "./Profiles.module.css";
import Modal from "../../components/ProfilesModal";
import { useSelector } from "react-redux";

export default function Profiles() {
  const [modalVisible, setModalVisible] = useState(false);
  const profiles = useSelector((state) => state.profiles);

  if (profiles) {
    profiles.map((el, index) => {
      return (
        <div key={index}>
          <p>{el.name}</p>
          <p>{el.gender}</p>
          <p>{el.bithdate}</p>
          <p>{el.city}</p>
          <button type="button">edit</button>
          <button type="button">delete</button>
        </div>
      );
    });
  }

  return (
    <>
      <NavBar />
      <Container className="d-flex flex-wrap-wrap">
        <h2>Profiles:</h2>
        <div>{profiles}</div>
        <div className={styles.createBox}>
          <Button
            variant={"outline-dark"}
            type="button"
            onClick={() => setModalVisible(true)}
          >
            +
          </Button>
          <h4>Create new profile</h4>
        </div>
        <Modal show={modalVisible} onHide={() => setModalVisible(false)} />
      </Container>
    </>
  );
}
