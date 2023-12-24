import {configureStore} from "@reduxjs/toolkit";
import {steamApi} from "./steamApi.tsx";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [steamApi.reducerPath] : steamApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(steamApi.middleware),})

export type TStore = ReturnType<typeof store.getState>;
setupListeners(store.dispatch)

