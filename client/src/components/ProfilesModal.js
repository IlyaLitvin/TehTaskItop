import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import profilesOperations from "../http/profiles/profilesOperations";

const dataUserInit = {
  name: "",
  gender: "",
  birthdate: "",
  city: "",
};

export default function ProfilesModal({ modalOptions, onHide }) {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(dataUserInit);
  const profiles = useSelector((store) => store.profiles);

  const { isModalOpen, id: editId } = modalOptions;

  const onChange = (e) => {
    const { value, name } = e.target;
    setUserData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const addProfile = (e) => {
    e.preventDefault();
    !editId
      ? dispatch(profilesOperations.addProfile(userData))
      : dispatch(profilesOperations.updateProfile({ data: userData, editId }));
    onHide();
    setUserData(dataUserInit);
  };

  useEffect(() => {
    if (editId) {
      const editProfile = profiles.find((profile) => profile.id === editId);
      const { id, ...rest } = editProfile;
      setUserData({ ...rest });
    }
  }, [editId, profiles]);

  return (
    <Modal show={isModalOpen} onHide={onHide} centered>
      <Modal.Body>
        <form onSubmit={addProfile}>
          <div>
            <div className="input-group mb-3">
              <div className="input-group mb-3">
                <label htmlFor="name">
                  name:
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    placeholder="name"
                    required
                    onChange={onChange}
                  />
                </label>
              </div>
              <div className="input-group mb-3">
                <span>Gender:</span>
                <div className="input-group">
                  <div>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={onChange}
                      checked={userData.gender === "male"}
                      required
                    />
                    <span>Male</span>
                  </div>
                  <div className="ml-3">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={onChange}
                      checked={userData.gender === "female"}
                      required
                    />
                    <span>Female</span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <label htmlFor="birthdate">
                  birthdate:
                  <input
                    type="text"
                    name="birthdate"
                    placeholder="birthdate"
                    value={userData.birthdate}
                    onChange={onChange}
                    required
                  />
                </label>
              </div>
              <div className="input-group mb-3">
                <label htmlFor="city">
                  city:
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={userData.city}
                    onChange={onChange}
                  />
                </label>
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
