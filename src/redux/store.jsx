
import { configureStore } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';
import { contactsReducer } from './reducers/contactsReducer.jsx';
import filterReducer from './reducers/filterReducer.jsx';


import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);


export const rootReducer = combineReducers({
  contacts: persistedContactsReducer,
  filter: filterReducer
});


export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export const persistor = persistStore(store);