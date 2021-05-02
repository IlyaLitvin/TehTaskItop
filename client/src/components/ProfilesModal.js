import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import profilesOperations from "../profiles/profilesOperations";

export default function ProfilesModal({ show, onHide }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  const addProfile = (e) => {
    e.preventDefault();
    dispatch(
      profilesOperations.addProfile(
        {
          name: e.target.name.value,
          gender: e.target.gender.value,
          birthdate: e.target.birthdate.value,
          city: e.target.city.value,
        },
        token
      )
    );
    onHide();
    dispatch(profilesOperations.getProfiles(token));
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Body>
        <form onSubmit={addProfile}>
          <div>
            <div className="input-group mb-3">
              <div className="input-group mb-3">
                <label htmlFor="name">
                  name:
                  <input type="text" name="name" placeholder="name" required />
                </label>
              </div>
              <div className="input-group mb-3">
                <span>Gender:</span>
                <div className="input-group">
                  <div>
                    <input type="radio" name="gender" value="male" required />
                    <span>Male</span>
                  </div>
                  <div className="ml-3">
                    <input type="radio" name="gender" value="female" required />
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
                    required
                  />
                </label>
              </div>
              <div className="input-group mb-3">
                <label htmlFor="city">
                  city:
                  <input type="text" name="city" placeholder="City" />
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

      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
