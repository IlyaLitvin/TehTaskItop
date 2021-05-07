import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../../components/NavBar";
import userOperations from "../../http/user/userOperations";
import styles from "./users.module.css";
import { NavLink } from "react-router-dom";

export default function Users() {
  const dispatch = useDispatch();
  const getUsers = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(userOperations.getAllUsers());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <div>Users:</div>
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
