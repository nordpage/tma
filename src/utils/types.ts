export interface ISteamProfile {
	response: ISteamProfileResponse;
}
export interface ISteamProfileResponsePlayers {
	steamid: string;
	communityvisibilitystate: number;
	profilestate: number;
	personaname: string;
	profileurl: string;
	avatar: string;
	avatarmedium: string;
	avatarfull: string;
	avatarhash: string;
	lastlogoff: number;
	personastate: number;
	primaryclanid: string;
	timecreated: number;
	personastateflags: number;
	loccountrycode: string;
	locstatecode: string;
	loccityid: number;
}
export interface ISteamProfileResponse {
	players: ISteamProfileResponsePlayers[];
}

export interface IFriend {
	steamID: string,
	relationship: string,
	friendSince: number
}