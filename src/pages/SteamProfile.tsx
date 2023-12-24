import {useGetSteamProfileQuery} from "../api/steamApi.tsx";
import {InputText} from "primereact/inputtext";
import {useState} from "react";
import {Button} from "primereact/button";
import '../App.css';
import { CloudStorage, postEvent } from '@tma.js/sdk';

export function SteamProfile() {

    const [id, setId] = useState("")
    const { data } = useGetSteamProfileQuery(id!)
    const cloudStorage = new CloudStorage(
        '6.10',
        () => Math.random().toString(),
        postEvent,
    );

    cloudStorage
        .get('steamId')
        .then((value) => {
            setId(value)
        });
    const saveId = () => {
        cloudStorage
            .set('steamId', id)
            .then(() => console.log("Item added"));
    }

    return (
        id !== null ? <div>
            {data!.response.players.find(x => x.steamid === id)!.personaname}
        </div> : <div className="inner">
            Don't have SteamId
            <InputText value={id} onChange={(e) => setId(e.target.value)} />
            <Button label="Save SteamId" onClick={saveId}/>
        </div>
    )
}

