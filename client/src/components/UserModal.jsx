import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import userOperations from "../http/user/userOperations";

const dataUserInit = {
  role: "",
};

export default function UserModal({ modalVisible, onHide }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [userData, setUserData] = useState(dataUserInit);
  const { isModalOpen, id: editId } = modalVisible;

  const onChange = (e) => {
    const { value, name } = e.target;
    setUserData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const editUser = (e) => {
    e.preventDefault();
    dispatch(userOperations.updateUser({ data: userData, editId }));
    onHide();
    setUserData(dataUserInit);
  };

  useEffect(() => {
    if (editId) {
      const updatedUser = users.find((user) => user.id === editId);
      const { id, ...rest } = updatedUser;
      setUserData({ ...rest });
    }
  }, [editId, users]);

  return (
    <Modal show={isModalOpen}>
      <Modal.Body>
        <form onSubmit={editUser}>
          <div className="input-group mb-3">
            <span>Role:</span>
            <div className="input-group">
              <div>
                <input
                  type="radio"
                  name="role"
                  value="USER"
                  onChange={onChange}
                  checked={userData.role === "USER"}
                  required
                />
                <span>User</span>
              </div>
              <div className="ml-3">
                <input
                  type="radio"
                  name="role"
                  value="ADMIN"
                  onChange={onChange}
                  checked={userData.role === "ADMIN"}
                  required
                />
                <span>Admin</span>
              </div>
            </div>
          </div>
          <hr />
          <Button variant="outline-success" type="submit">
            \/
          </Button>
          <Button variant="outline-danger" onClick={onHide}>
            X
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
