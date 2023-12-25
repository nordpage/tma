import { useGetSteamProfileQuery} from "../api/steamApi.tsx";
import {InputText} from "primereact/inputtext";
import {useState} from "react";
import {Button} from "primereact/button";
import '../App.css';
import {Status} from "../components/Status.tsx";
import {ProgressSpinner} from "primereact/progressspinner";

import 'primeicons/primeicons.css';

export function SteamProfile() {
    const steamId = localStorage.getItem("steamId")
    const [id, setId] = useState("")
    const { data, isError, isLoading } = useGetSteamProfileQuery(steamId)



    const saveId = () => {
        localStorage.setItem("steamId", id)
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
                        <span className="pi pi-external-link" style={{fontSize: '12px'}}></span>
                    </div>
                </div>
            ) : null}
        </div> : <div className="inner">
            Don't have SteamId
            <InputText value={id} onChange={(e) => setId(e.target.value)} />
            <Button label="Save SteamId" onClick={saveId}/>
        </div>
    )
}

