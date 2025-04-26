import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import authReducer from "@/features/auth/authSlice";
import { productApi } from "@/services/product";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootConfig = {
    key: "root",
    storage,
    whitelist: ["auth"],
};

const rootReducer = combineReducers({
    auth: authReducer,
    [productApi.reducerPath]: productApi.reducer,
});

export const store = configureStore({
    reducer: persistReducer(rootConfig, rootReducer),
    middleware: (getDefault) =>
        getDefault({ serializableCheck: false }).concat(
            // logger,
            productApi.middleware
        ),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
