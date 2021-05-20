import React from "react";
import css from './Dashboard.module.css'

export default function Dashboard({getDashboard = {}}) {
  return (
    <>
      <h2 className={css.title}>Dashboard:</h2>
      <div className={css.mainWrapper}>
        <div className={css.userWrapper}>
          <p className={css.text}>Users:</p>
          <p className={css.number}>{getDashboard.users}</p>
        </div>
        <div className={css.profileWrapper}>
          <p className={css.text}>Profiles:</p>
          <p className={css.number}>{getDashboard.profiles}</p>
        </div>
        <div className={css.wrapperForOld}>
          <p className={css.text}>Profiles over 18 years old:</p>
          <p className={css.number}>{getDashboard.oldProfiles}</p>
        </div>
      </div>
    </>
  );
}
