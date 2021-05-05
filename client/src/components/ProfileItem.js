// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import profilesOperations from "../profiles/profilesOperations";
// import styles from "../pages/Profiles/Profiles.module.css";

// export default function ProfileItem({
//   setModalVisible,
//   id,
//   profile,
//   removeHandler,
//   index,
// }) {
//   return (
//     <div key={index} className={styles.createBox}>
//       <p>{profile.name}</p>
//       <p>{profile.gender}</p>
//       <p>{profile.birthdate}</p>
//       <p>{profile.city}</p>
//       <button
//         type="button"
//         onClick={() => setModalVisible({ isModalOpen: true, id: id })}
//       >
//         edit
//       </button>
//       <button type="button" onClick={removeHandler(id)}>
//         delete
//       </button>
//     </div>
//   );
// }
//   const [modalVisible, setModalVisible] = useState({
//     isModalOpen: false,
//     id: "",
//   });
//   const getProfiles = useSelector((state) => state.profiles);
// const dispatch = useDispatch();
//   const token = useSelector((state) => state.user.token);
//   const deleteProfile = (e) => {
//     dispatch(profilesOperations.deleteProfile(e, token));
//   };

//   let data;
//   if (getProfiles.length >= 1) {
//     data = getProfiles.map((el, index) => {
//       return (
//         <div key={index} className={styles.createBox}>
//           <p>{el.name}</p>
//           <p>{el.gender}</p>
//           <p>{el.birthdate}</p>
//           <p>{el.city}</p>
//           <button
//             type="button"
//             onClick={() => setModalVisible({ isModalOpen: true, id: el.id })}
//           >
//             edit
//           </button>
//           <button type="button" onClick={() => deleteProfile(el.id)}>
//             delete
//           </button>
//         </div>
//       );
//     });
