import React from "react";
import NavBar from "../../components/NavBar";

export default function Dashboard() {
  return (
    <div>
      <NavBar />
      <div className="users">Users:</div>
      <div className="profiles">Profiles:</div>
      <div className="oldProfiles">Profiles over 18 years old:</div>
    </div>
  );
}
