import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../../components/NavBar";
import userOperations from "../../user/userOperations";
import styles from "../Profiles/Profiles.module.css";
import { NavLink } from "react-router-dom";

export default function Users() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const getUsers = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(userOperations.getAllUsers(token));
  }, [dispatch]);

  let data;
  if (getUsers !== []) {
    data = getUsers.map((el, index) => {
      return (
        <NavLink to="/" key={index} className={styles.createBox}>
          <div>
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
