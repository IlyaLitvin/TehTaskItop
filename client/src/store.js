import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REHYDRATE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authReducer";
import profilesRudecer from "./profiles/profilesReducer";
import usersReducer from "./user/userReducer";
import dashboardReducer from "./user/dashboardReducer";

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER],
  },
});

const authPersistConfig = {
  key: "user",
  storage,
  whitelist: ["token", "isAuth", "role", "email"],
};

const reducers = combineReducers({
  user: persistReducer(authPersistConfig, authReducer),
  profiles: profilesRudecer,
  users: usersReducer,
  dashboard: dashboardReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: [...defaultMiddleware],
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});

export const persistor = persistStore(store);

// const store = configureStore({
//   reducer: authReducer,
// });

// export default store;
