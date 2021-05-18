import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import dashboardOperations from "../../http/user/dashboardOperations";
import Dashboard from './Dashboard'

export default function DashboardLogic() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const getDashboard = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(dashboardOperations.getInfo(token));
  }, [dispatch, token]);

  return (
    <div>
        <Dashboard getDashboard={ getDashboard } />
    </div>
  );
}
