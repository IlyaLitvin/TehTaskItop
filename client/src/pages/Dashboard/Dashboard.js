import React from "react";
import NavBar from "../../components/NavBar";
import { useSelector, useDispatch } from "react-redux";

export default function Dashboard() {
  const users = useSelector((state) => state.dashboard.users);
  const profiles = useSelector((state) => state.dashboard.profiles);
  const oldProfiles = useSelector((state) => state.dashboard.oldProfiles);

  return (
    <div>
      <NavBar />
      <div className="users">Users:{users}</div>
      <div className="profiles">Profiles:{profiles}</div>
      <div className="oldProfiles">
        Profiles over 18 years old:{oldProfiles}
      </div>
    </div>
  );
}
