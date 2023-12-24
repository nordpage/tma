import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {steamURL} from "../utils/constants.tsx";
import {ISteamProfile} from "../utils/types.ts";

export const steamApi = createApi({
    reducerPath: 'steamApi',
    baseQuery: fetchBaseQuery({ baseUrl: steamURL, mode: "no-cors" }),
    endpoints: (builder) => ({
        getSteamProfile: builder.query<ISteamProfile, string>({
            query: (steamId) => `ISteamUser/GetPlayerSummaries/v0002/?key=60081F468921A49DCF2E790CABD543F6&steamids=${steamId}`,
        }),
    }),
})

export const {useGetSteamProfileQuery} = steamApi