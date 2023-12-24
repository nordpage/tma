import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {steamURL} from "../utils/constants.tsx";
import {ISteamProfile} from "../utils/types.ts";

export const steamApi = createApi({
    reducerPath: 'steamApi',
    baseQuery: fetchBaseQuery({ baseUrl: steamURL }),
    endpoints: (builder) => ({
        getSteamProfile: builder.query<ISteamProfile, string>({
            query: (steamId) => `ISteamUser/GetPlayerSummaries/v0002/?key=7F73B61B2C14C0796498A5E2EBC345F4&steamids=${steamId}`,
            transformResponse:(response: ISteamProfile) => {
                return response
            }
        }),
    }),
})

export const {useGetSteamProfileQuery} = steamApi