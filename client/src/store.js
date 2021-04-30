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

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: {
    ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REHYDRATE, REGISTER],
  },
});

const authPersistConfig = {
  key: "user",
  storage,
  whitelist: ["user"],
};

// const reducers = combineReducers({

// });

export const store = configureStore({
  reducer: persistReducer(authPersistConfig, authReducer),
  middleware: [...defaultMiddleware],
});

export const persistor = persistStore(store);

// const store = configureStore({
//   reducer: authReducer,
// });

// export default store;
