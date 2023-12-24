import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {steamURL} from "../utils/constants.tsx";
import {ISteamProfile} from "../utils/types.ts";

export const steamApi = createApi({
    reducerPath: 'steamApi',
    baseQuery: fetchBaseQuery({ baseUrl: steamURL }),
    endpoints: (builder) => ({
        getSteamProfile: builder.query<ISteamProfile, string>({
            query: (steamId) => `ISteamUser/GetPlayerSummaries/v0002/?key=28A245A3DDE4C15A6CFC679BB5AE9B13&steamids=${steamId}`,
        }),
    }),
})

export const {useGetSteamProfileQuery} = steamApi