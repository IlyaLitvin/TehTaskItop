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

  const currentUser = (e) => {
    console.log(e);
    dispatch(userOperations.getUser(e));
  };

  let data;
  if (getUsers.length >= 1) {
    data = getUsers.map((el) => {
      return (
        <NavLink to={`/users/${el.id}`} key={el.id} onClick={() => currentUser}>
          <div className={styles.userInfoWrapper}>
            <p>{el.role}</p>
            <p>{el.email}</p>
            <p>{el.allProfiles} profiles</p>
          </div>
        </NavLink>
      );
    });
  }

  return (
    <div>
      <NavBar />
      <div>Users:</div>
      <div>{data}</div>
    </div>
  );
}
