import React from "react";
import styles from "./users.module.css";
import { NavLink } from "react-router-dom";

export default function Users({getUsers = []}) {
   return (
    <div>
      <h2>Users:</h2>
      <div>
        <ul>
          {getUsers.length
            ? getUsers.map((user) => {
                return (
                  <li key={user.id}>
                    <NavLink to={`/users/${user.id}`}>
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
