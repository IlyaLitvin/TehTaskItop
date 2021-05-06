import React, { useEffect } from "react";
import NavBar from "../../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import dashboardOperations from "../../http/user/dashboardOperations";

export default function Dashboard() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const getDashboard = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(dashboardOperations.getInfo(token));
  }, [dispatch, token]);

  return (
    <div>
      <NavBar />
      <div className="users">Users:{getDashboard.users}</div>
      <div className="profiles">Profiles:{getDashboard.profiles}</div>
      <div className="oldProfiles">
        Profiles over 18 years old:{getDashboard.oldProfiles}
      </div>
    </div>
  );
}
