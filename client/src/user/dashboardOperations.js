import axios from "axios";
import userActions from "./userActions";

const url = "http://localhost:8080/api/user";

const getInfo = (token) => (dispatch) => {
  dispatch(userActions.getUsersInfoRequest());
  axios
    .get(`${url}/dashboard`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => dispatch(userActions.getUsersInfoSuccess(data)))
    .catch((error) => dispatch(userActions.getUsersInfoError(error)));
};

export default { getInfo };
