import React from "react";
import styles from "./users.module.css";
import { NavLink } from "react-router-dom";

export default function Users({getUsers = []}) {
   return (
    <div>
      <h2 className={styles.title}>Users:</h2>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {getUsers.length
            ? getUsers.map((user) => {
                return (
                  <li key={user.id} className={styles.listItem}>
                    <NavLink to={`/users/${user.id}`} className={styles.listItemLink}>
                        <div className={styles.userInfoWrapper}>
                          <p>{user.role}</p>
                          <p>{user.email}</p>
                          <p>{user.allProfiles} profiles</p>
                        </div>
                    </NavLink>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
    </div>
  );
}
