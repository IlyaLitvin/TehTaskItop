import axios from "axios";
import profilesActions from "./profilesActions";

const url = "http://kapusta.fun/api/user/profile";

axios.default.baseURL = url;

const addProfile = (data, token) => (dispatch) => {
  dispatch(profilesActions.addProfileRequest());
  axios
    .post(`${url}/create`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => dispatch(profilesActions.addProfileSuccess(data)))
    .catch((error) => dispatch(profilesActions.addProfileError(error)));
};

const deleteProfile = (data, token) => (dispatch) => {
  dispatch(profilesActions.deleteProfileRequest());

  axios
    .delete(`${url}/${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => dispatch(profilesActions.deleteProfileSuccess(data)))
    .catch((error) => dispatch(profilesActions.deleteProfileError(error)));
};

const getProfiles = (data, token) => (dispatch) => {
  console.log(data);
  dispatch(profilesActions.getProfilesRequest());
  axios
    .get(`${url}/${data.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((data) => dispatch(profilesActions.getProfilesSuccess(data)))
    .catch((error) => dispatch(profilesActions.getProfilesError(error)));
};

export default { addProfile, deleteProfile, getProfiles };
