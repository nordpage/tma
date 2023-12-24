import {useGetSteamProfileQuery} from "../api/steamApi.tsx";
import {InputText} from "primereact/inputtext";
import {useState} from "react";
import {Button} from "primereact/button";
import '../App.css';

export function SteamProfile() {
    const steamId = localStorage.getItem("steamId")
    const [id, setId] = useState("")
    const { data, isError, isLoading } = useGetSteamProfileQuery(steamId)


    const saveId = () => {
        localStorage.setItem("steamId", id)
    }

    return (
        steamId !== null ? <div>
            {isError ? (
                <div>Oh no, there was an error</div>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <div className="profile">
                    <img src={data.avatar.large} alt={data.nickname} className="avatar"/>
                    <h3>{data.nickname}</h3>
                </div>
            ) : null}
        </div> : <div className="inner">
            Don't have SteamId
            <InputText value={id} onChange={(e) => setId(e.target.value)} />
            <Button label="Save SteamId" onClick={saveId}/>
        </div>
    )
}

