import {useGetFriendsQuery, useGetSteamProfileQuery} from "../api/steamApi.tsx";
import {InputText} from "primereact/inputtext";
import  {useState} from "react";
import {Button} from "primereact/button";
import '../App.css';
import {Status} from "../components/Status.tsx";
import {ProgressSpinner} from "primereact/progressspinner";

import 'primeicons/primeicons.css';
import WebApp from "@twa-dev/sdk";
import {IFriend} from "../utils/types.ts";
import {Friend} from "../components/Friend.tsx";
import {Toggle} from "../components/Toggle.tsx";
import {Mocks} from "./Mocks.tsx";

export function SteamProfile() {
    const steamId = localStorage.getItem("steamId")
    const [id, setId] = useState("")
    const { data, isError, isLoading } = useGetSteamProfileQuery(steamId)
    const friendsQuery = useGetFriendsQuery(steamId)



    const saveId = () => {
        localStorage.setItem("steamId", id)
    }

const steamLink = () => {
  WebApp.openLink(data.url)
}

const FriendsList = () => {
    return <div className="friendList">{
        friendsQuery.data.map((friend: IFriend, index: number) => {
            return <Friend steamId={friend.steamID} key={index}/>
        })
    }</div>
}

    return (
        <div>
            <Mocks/>
        </div>
    )
}

