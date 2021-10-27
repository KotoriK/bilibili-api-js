import { APIRequest, APIResponse, SEC, USER_AGENT } from "../api";

export function getRoomPlayInfo(room_id: number | string): APIRequest<APIResponse<GetRoomPlayInfo_Data>> {
    return {
        url: `http://api.live.bilibili.com/xlive/web-room/v1/index/getRoomPlayInfo?room_id=${room_id}`,
        options: {
            headers: {
                ...SEC,
                'user-agent': USER_AGENT
            }
        }
    }
}
export interface GetRoomPlayInfo_Data {
    room_id: number,
    "short_id": number,//display_id
    "uid": number,
    "need_p2p": number,
    "is_hidden": boolean,
    "is_locked": boolean,
    "is_portrait": boolean,
    "live_status": number,
    "hidden_till": number,
    "lock_till": number,
    "encrypted": boolean,
    "pwd_verified": boolean,
    "live_time": number,
    "room_shield": number,
    "is_sp": number,
    "special_type": number,
    "play_url": string,
    "all_special_types": Array<any>
}