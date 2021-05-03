import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import { Container, Button } from "react-bootstrap";
import styles from "./Profiles.module.css";
import Modal from "../../components/ProfilesModal";
import { useSelector, useDispatch } from "react-redux";
import profilesOperations from "../../profiles/profilesOperations";

export default function Profiles() {
  const [modalVisible, setModalVisible] = useState(false);
  const getProfiles = useSelector((state) => state.profiles);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profilesOperations.getProfiles(token));
  }, [dispatch]);

  const deleteProfile = (e) => {
    dispatch(profilesOperations.deleteProfile(e, token));
  };

  let data;
  if (getProfiles !== []) {
    data = getProfiles.map((el, index) => {
      return (
        <div key={index} className={styles.createBox}>
          <p>{el.name}</p>
          <p>{el.gender}</p>
          <p>{el.birthdate}</p>
          <p>{el.city}</p>
          <button type="button" onClick={() => setModalVisible(true)}>
            edit
          </button>
          <button type="button" onClick={() => deleteProfile(el.id)}>
            delete
          </button>
        </div>
      );
    });
  }

  return (
    <>
      <NavBar />
      <Container className="d-flex flex-wrap-wrap">
        <h2>Profiles:</h2>
        <div>{data}</div>
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
        <Modal show={modalVisible} onHide={() => setModalVisible(false)} />
      </Container>
    </>
  );
}
