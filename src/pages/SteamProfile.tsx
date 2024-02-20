import '../App.css';
import 'primeicons/primeicons.css';
import {Mocks} from "./Mocks.tsx";
export function SteamProfile() {
 //   const steamId = localStorage.getItem("steamId")
//     const [id, setId] = useState("")
//     const { data, isError, isLoading } = useGetSteamProfileQuery(steamId)
//     const friendsQuery = useGetFriendsQuery(steamId)
//
//
//
//     const saveId = () => {
//         localStorage.setItem("steamId", id)
//     }
//
// const steamLink = () => {
//   WebApp.openLink(data.url)
// }

// const FriendsList = () => {
//     return <div className="friendList">{
//         friendsQuery.data.map((friend: IFriend, index: number) => {
//             return <Friend steamId={friend.steamID} key={index}/>
//         })
//     }</div>
// }

    return (
        <div>
            <Mocks/>
        </div>
    )
}

