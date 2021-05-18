import React from "react";

export default function Dashboard({getDashboard = {}}) {
  return (
    <div>
      <div className="users">
        <p>Users:{getDashboard.users}</p>
      </div>
      <div className="profiles">
        <p>Profiles:{getDashboard.profiles}</p>
      </div>
      <div className="oldProfiles">
        <p>Profiles over 18 years old:{getDashboard.oldProfiles}</p>
      </div>
    </div>
  );
}
