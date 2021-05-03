import axios from "axios";
import dashboardActions from "./dashboardActions";

const url = "http://localhost:8080/api/user";

const getInfo = (token) => (dispatch) => {
  dispatch(dashboardActions.getUsersInfoRequest());
  axios
    .get(`${url}/dashboard`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => dispatch(dashboardActions.getUsersInfoSuccess(data)))
    .catch((error) => dispatch(dashboardActions.getUsersInfoError(error)));
};

export default { getInfo };
