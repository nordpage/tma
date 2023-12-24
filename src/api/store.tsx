import {configureStore} from "@reduxjs/toolkit";
import {steamApi} from "./steamApi.tsx";
import {setupListeners} from "@reduxjs/toolkit/query";
import {pokemonApi} from "./pokemonApi.ts";

export const store = configureStore({
    reducer: {
        [steamApi.reducerPath] : steamApi.reducer,
        [pokemonApi.reducerPath] : pokemonApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(steamApi.middleware).concat(pokemonApi.middleware),})

export type TStore = ReturnType<typeof store.getState>;
setupListeners(store.dispatch)

