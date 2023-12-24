import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {steamURL} from "../utils/constants.tsx";

export const steamApi = createApi({
    reducerPath: 'steamApi',
    baseQuery: fetchBaseQuery({ baseUrl: steamURL }),
    endpoints: (builder) => ({
        getSteamProfile: builder.query({
            query: (steamId) => `/api/steam/getuser/${steamId}`,
        }),
    }),
})

export const {useGetSteamProfileQuery} = steamApi