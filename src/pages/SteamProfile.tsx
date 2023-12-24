import React from 'react';


export const SteamProfile = function () {
    const steamId:string|null = localStorage.getItem("steamId")

    return (
        steamId !== null ? <div>Steam Profile</div> : <div>Don't have SteamId</div>
    )
}