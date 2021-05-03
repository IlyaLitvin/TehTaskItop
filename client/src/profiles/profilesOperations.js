import axios from "axios";
import profilesActions from "./profilesActions";

const url = "http://localhost:8080/api/user/profiles";

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

const deleteProfile = (id, token) => (dispatch) => {
  dispatch(profilesActions.deleteProfileRequest());
  axios
    .delete(`${url}/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => dispatch(profilesActions.deleteProfileSuccess(id)))
    .catch((error) => dispatch(profilesActions.deleteProfileError(error)));
};

const getProfiles = (token) => (dispatch) => {
  dispatch(profilesActions.getProfilesRequest());
  axios
    .get(`${url}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => dispatch(profilesActions.getProfilesSuccess(data)))
    .catch((error) => dispatch(profilesActions.getProfilesError(error)));
};

export default { addProfile, deleteProfile, getProfiles };
