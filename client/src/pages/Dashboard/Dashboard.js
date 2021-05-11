import React, { useEffect } from "react";
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
      <div className="users">Users:{getDashboard.users}</div>
      <div className="profiles">Profiles:{getDashboard.profiles}</div>
      <div className="oldProfiles">
        Profiles over 18 years old:{getDashboard.oldProfiles}
      </div>
    </div>
  );
}
