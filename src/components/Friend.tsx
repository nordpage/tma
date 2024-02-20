import {useGetSteamProfileQuery} from "../api/steamApi.tsx";
import '../App.css';
import {Status} from "./Status.tsx";

type Props = {
    steamId: string,
    key: number
}

export function Friend({steamId, key} : Props) {
    const {data} = useGetSteamProfileQuery(steamId)

    return (
        data && <div className="horz" key={key}>
            <img src={data.avatar.large} alt={data.nickname} className="avatarSmall"/>
            <div>{data.nickname}</div>
            <Status type={data.personaState}/>
        </div>
)
}