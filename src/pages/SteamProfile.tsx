import React from 'react';

function SteamProfile() {
    const steamId:string|null = localStorage.getItem("steamId")

    return (
        steamId !== null ? <div>Steam Profile</div> : <div>Don't have SteamId</div>
    )
}

export default SteamProfile;