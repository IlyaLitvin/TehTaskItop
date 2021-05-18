import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import profilesOperations from "../../http/profiles/profilesOperations";
import Profiles from './Profiles';
import ProfilesModal from "../../components/ProfilesModal";

export default function ProfilesLogic({ id }) {
  const userId = id ? id : "";
  const [modalVisible, setModalVisible] = useState({
    isModalOpen: false,
    id: "",
  });
  const getProfiles = useSelector((state) => state.profiles) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profilesOperations.getProfiles(userId));
  }, [dispatch, userId]);

  const deleteProfile = (e) => {
    dispatch(profilesOperations.deleteProfile(e));
  };

  return (
    <>
       <ProfilesModal
        id={id}
        modalVisible={modalVisible}
        onHide={() => setModalVisible({ isModalOpen: false })}
      />
      <Profiles 
      setModalVisible={setModalVisible} 
      getProfiles={getProfiles} 
      deleteProfile={ deleteProfile } 
      modalVisible={modalVisible} />
  </>
  );
}
