import { createStore } from "redux";
import reducer from "./Reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedStore = persistReducer(persistConfig, reducer)

let store = createStore(persistedStore);

export const persistor = persistStore(store)

export default store;
