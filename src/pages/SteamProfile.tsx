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
        steamId !== null ? <div className="container">
            {isError ? (
                <div>Oh no, there was an error</div>
            ) : isLoading ? (
                <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="2" animationDuration=".5s" />
            ) : data ? (
                <div className="profile">
                    <img src={data.avatar.large} alt={data.nickname} className="avatar"/>
                    <div className="horz">
                        <Status type={data.personaState}/>
                        <p className="title">{data.nickname}</p>
                        <span className="pi pi-external-link button" style={{fontSize: '12px'}} onClick={steamLink}></span>
                    </div>
                    {friendsQuery.data !== null && <Toggle header="My Friends" children={<FriendsList/>}/> }
                </div>
            ) : null}
        </div> : <div className="inner">
            Don't have SteamId
            <InputText value={id} onChange={(e) => setId(e.target.value)} />
            <Button label="Save SteamId" onClick={saveId}/>
        </div>
    )
}

