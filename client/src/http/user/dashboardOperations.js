import { authHost } from "../index";
import dashboardActions from "./dashboardActions";

const getInfo = () => (dispatch, getState) => {
  const token = getState().user.token;
  dispatch(dashboardActions.getUsersInfoRequest());
  authHost
    .get("/dashboard", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => dispatch(dashboardActions.getUsersInfoSuccess(data)))
    .catch((error) => dispatch(dashboardActions.getUsersInfoError(error)));
};

export default { getInfo };
