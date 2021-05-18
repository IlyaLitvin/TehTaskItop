import React from "react";
import { Container, Button } from "react-bootstrap";
import styles from "./Profiles.module.css";

export default function Profiles({ deleteProfile, setModalVisible, getProfiles = [] }) {
  
   return (
    <Container className="d-flex flex-wrap-wrap">
      <h2>Profiles:</h2>
       <ul>
         {getProfiles.length ? getProfiles.map((el) =>         
         <li key={el.id} >
          <div  className={styles.createBox}>
            <p>{el.name}</p>
            <p>{el.gender}</p>
            <p>{el.birthdate}</p>
            <p>{el.city}</p>
            <button
            type="button"
            onClick={() => setModalVisible({ isModalOpen: true, id: el.id })}>
            edit
            </button>
            <button type="button" onClick={() => deleteProfile(el.id)}>
            delete
            </button>
          </div>
        </li>
      ) : null}
       </ul>
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
    </Container>
  );
}
