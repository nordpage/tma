
import {IFriend} from "../utils/types.ts";
import {Friend} from "../components/Friend.tsx";
import data from "../utils/mocks.json"



export function Mocks() {

    const mocks = JSON.parse(data)


    const MocksList = () => {
        return <div className="friendList">{
            mocks.map((friend: IFriend, index: number) => {
                return <Friend steamId={friend.steamID} key={index}/>
            })
        }</div>
    }
    return (
        data && <div className="horz">
            {
                <MocksList/>
            }
        </div>
    )
}