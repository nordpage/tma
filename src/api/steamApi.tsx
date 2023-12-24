import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {steamURL} from "../utils/constants.tsx";
import {ISteamProfile} from "../utils/types.ts";

export const steamApi = createApi({
    reducerPath: 'steamApi',
    baseQuery: fetchBaseQuery({ baseUrl: steamURL }),
    endpoints: (builder) => ({
        getSteamProfile: builder.query<ISteamProfile, string>({
            query: (steamId) => `ISteamUser/GetPlayerSummaries/v0002/?key=80B5B81001256250B648EA670A2AEE1A&steamids=${steamId}`,
        }),
    }),
})

export const {useGetSteamProfileQuery} = steamApi