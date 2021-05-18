import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import userOperations from "../../http/user/userOperations";
import UserModal from "../../components/UserModal";
import User from './User';

export default function UserLogic() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const [modalVisible, setModalVisible] = useState({
    isModalOpen: false,
    id: "",
  });

  useEffect(() => {
    dispatch(userOperations.getAllUsers());
  }, [dispatch]);

  const user = id ? users.find((u) => u.id === +id) : null;

  useEffect(() => {
    dispatch(userOperations.getUser({ user, id }));
  }, [dispatch, user, id]);

  const deleteUser = (e) => {
    dispatch(userOperations.deleteUser(e));
    alert("User was delete");
    history.push("/users");
  };

  return (
    <>
        <User
            deleteUser={deleteUser}
              setModalVisible={setModalVisible}
              id={id}
            user={user}  
        />
        <UserModal
            modalOptions={modalVisible}
            onHide={() => setModalVisible({ isModalOpen: false })}
        />
    </>
  );
}
