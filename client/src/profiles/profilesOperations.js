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
    .then(({ data }) =>
      dispatch(profilesActions.addProfileSuccess(data.profile))
    )
    .catch((error) => dispatch(profilesActions.addProfileError(error)));
};

const deleteProfile = (id, token) => (dispatch) => {
  // console.log("data:", data, "token: ", token, "id: ", id);
  dispatch(profilesActions.deleteProfileRequest());
  axios
    .delete(`${url}/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
      console.log(profilesActions.deleteProfileSuccess);
      dispatch(profilesActions.deleteProfileSuccess(id));
    })
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

const updateProfile = ({ data, id }) => (dispatch, getState) => {
  const token = getState().user.token;
  dispatch(profilesActions.updateProfileRequest());
  axios
    .patch(`${url}/update/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => dispatch(profilesActions.updateProfileSuccess({ ...data, id })))
    .catch((error) => dispatch(profilesActions.updateProfileError(error)));
};

export default { addProfile, deleteProfile, getProfiles, updateProfile };
