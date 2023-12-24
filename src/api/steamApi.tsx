import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {steamURL} from "../utils/constants.tsx";

export const steamApi = createApi({
    reducerPath: 'steamApi',
    baseQuery: fetchBaseQuery({ baseUrl: steamURL, mode: "no-cors" }),
    endpoints: (builder) => ({
        getSteamProfile: builder.query({
            query: (steamId) => `ISteamUser/GetPlayerSummaries/v0002/?key=7F73B61B2C14C0796498A5E2EBC345F4&steamids=${steamId}`,
        }),
    }),
})

export const {useGetSteamProfileQuery} = steamApi