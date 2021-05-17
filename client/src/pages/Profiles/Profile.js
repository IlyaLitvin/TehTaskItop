import React from 'react'
import styles from "./Profiles.module.css";

export default function Profile({el, setModalVisible, deleteProfile}) {
    return (
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
    );
}
