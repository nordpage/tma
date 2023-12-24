import {useGetSteamProfileQuery} from "../api/steamApi.tsx";
import {InputText} from "primereact/inputtext";
import {useState} from "react";
import {Button} from "primereact/button";
import '../App.css';

export function SteamProfile() {
    const steamId = localStorage.getItem("steamId")
    const [id, setId] = useState("")
    const { data } = useGetSteamProfileQuery(steamId!)


    const saveId = () => {
        localStorage.setItem("steamId", id)
    }

    return (
        steamId !== null ? <div>
            {data && <p>{data!.response!.players.toString()}</p>}
        </div> : <div className="inner">
            Don't have SteamId
            <InputText value={id} onChange={(e) => setId(e.target.value)} />
            <Button label="Save SteamId" onClick={saveId}/>
        </div>
    )
}

