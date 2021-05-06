import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import { Container, Button } from "react-bootstrap";
import styles from "./Profiles.module.css";
import ProfilesModal from "../../components/ProfilesModal";
import { useSelector, useDispatch } from "react-redux";
import profilesOperations from "../../http/profiles/profilesOperations";
import ProfileItem from "../../components/ProfileItem";

export default function Profiles() {
  const [modalVisible, setModalVisible] = useState({
    isModalOpen: false,
    id: "",
  });
  const getProfiles = useSelector((state) => state.profiles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profilesOperations.getProfiles());
  }, [dispatch]);

  const deleteProfile = (e) => {
    dispatch(profilesOperations.deleteProfile(e));
  };

  let data;
  if (getProfiles.length >= 1) {
    data = getProfiles.map((el, index) => {
      return (
        <div key={index} className={styles.createBox}>
          <p>{el.name}</p>
          <p>{el.gender}</p>
          <p>{el.birthdate}</p>
          <p>{el.city}</p>
          <button
            type="button"
            onClick={() => setModalVisible({ isModalOpen: true, id: el.id })}
          >
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
            onClick={() => setModalVisible({ isModalOpen: true })}
          >
            +
          </Button>
          <h4>Create new profile</h4>
        </div>
        <ProfilesModal
          modalOptions={modalVisible}
          onHide={() => setModalVisible({ isModalOpen: false })}
        />
      </Container>
    </>
  );
}
