import React from 'react';

type Props = {
    steamId?: string|null|undefined;
}
export const SteamProfile = function ({ steamId }: Props) {
    return (
        steamId !== null ? <div>Steam Profile</div> : <div>Don't have SteamId</div>
    )
}