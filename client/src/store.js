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
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import authReducer from "./http/auth/authReducer";
import profilesRudecer from "./http/profiles/profilesReducer";
import usersReducer from "./http/user/userReducer";
import dashboardReducer from "./http/user/dashboardReducer";

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER],
  },
});

const authPersistConfig = {
  key: "user",
  storage,
  whitelist: ["token", "isAuth", "role", "email", "id"],
};

const reducers = combineReducers({
  user: persistReducer(authPersistConfig, authReducer),
  profiles: profilesRudecer,
  users: usersReducer,
  dashboard: dashboardReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: [...defaultMiddleware, thunk],
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});

export const persistor = persistStore(store);
