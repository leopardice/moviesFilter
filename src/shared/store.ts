import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import currentPage from "./features/current-page";
import loginModal from "./features/login-modal";
import auth from "./features/authorization";
import filterValues from "./features/filter-values";
import listType from "./features/film-list-type";

const rootReducer = combineReducers({
  currentPage,
  loginModal,
  auth,
  filterValues,
  listType,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["listType", "auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
