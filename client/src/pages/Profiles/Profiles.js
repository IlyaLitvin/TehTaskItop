import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import { useDispatch, useSelector } from "react-redux";

export default function Profiles() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const profiles = useSelector((state) => state.profiles);

  const addProfile = (e) => {
    e.preventDefault();
    dispatch();
  };

  return (
    <div>
      <NavBar />
      <h2>Profiles:</h2>
      <div>
        <button type="button">+</button>
        <h4>Create new profile</h4>
      </div>
    </div>
  );
}
