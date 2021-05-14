import { authHost } from "../index";
import profilesActions from "./profilesActions";

const addProfile = (data, id) => (dispatch, getState) => {
  const token = getState().user.token;
  dispatch(profilesActions.addProfileRequest());
  authHost
    .post(`/profiles/create/${id}`, data, {
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

const deleteProfile = (id) => (dispatch, getState) => {
  const token = getState().user.token;
  dispatch(profilesActions.deleteProfileRequest());
  authHost
    .delete(`/profiles/delete/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => dispatch(profilesActions.deleteProfileSuccess(id)))
    .catch((error) => dispatch(profilesActions.deleteProfileError(error)));
};

const getProfiles = (id) => (dispatch, getState) => {
  const token = getState().user.token;
  dispatch(profilesActions.getProfilesRequest());
  authHost
    .get(`/profiles/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => dispatch(profilesActions.getProfilesSuccess(data)))
    .catch((error) => dispatch(profilesActions.getProfilesError(error)));
};

const updateProfile = ({ data, editId }) => (dispatch, getState) => {
  const token = getState().user.token;
  dispatch(profilesActions.updateProfileRequest());
  authHost
    .patch(`/profiles/update/${editId}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() =>
      dispatch(profilesActions.updateProfileSuccess({ id: editId, ...data }))
    )
    .catch((error) => dispatch(profilesActions.updateProfileError(error)));
};

export default { addProfile, deleteProfile, getProfiles, updateProfile };
