import { APIRequest, APIResponse, SEC, USER_AGENT } from "./api";

export function getSpaceAccInfo(roomId: string | number): APIRequest<APIResponse<GetSpaceAccInfo_Data>> {
    return {
        url: 'https://api.bilibili.com/x/space/acc/info?mid=' + roomId,
        options: {
            headers: {
                ...SEC,
                'user-agent': USER_AGENT
            }
        }
    }
}
export interface GetSpaceAccInfo_Data {
    mid: number
    name: string
    sex: string
    face: string
    sign: string
    rank: number
    level: number
    jointime: number
    moral: number
    silence: number
    coins: number
    "fans_badge": boolean
    "fans_medal": FansMedal
    official: Official
    vip: Vip
    pendant: Pendant
    nameplate: Nameplate
    "user_honour_info": UserHonourInfo
    "is_followed": boolean
    "top_photo": string
    theme: Theme
    "sys_notice": Theme
    "live_room": LiveRoom
    birthday: string
    school: null
    profession: Profession
    tags: null
    series: Series
}
interface FansMedal {
    show: boolean
    wear: boolean
    medal: null
}
interface Official {
    role: number
    title: string
    desc: string
    type: number
}
interface Label {
    path: string
    text: string
    "label_theme": string
    "text_color": string
    "bg_style": number
    "bg_color": string
    "border_color": string
}
interface Vip {
    type: number
    status: number
    "due_date": number
    "vip_pay_type": number
    "theme_type": number
    label: Label
    "avatar_subscript": number
    "nickname_color": string
    role: number
    "avatar_subscript_url": string
}
interface Pendant {
    pid: number
    name: string
    image: string
    expire: number
    "image_enhance": string
    "image_enhance_frame": string
}
interface Nameplate {
    nid: number
    name: string
    image: string
    "image_small": string
    level: string
    condition: string
}
interface UserHonourInfo {
    mid: number
    colour: null
    tags: Array<undefined>
}
interface Theme {

}
interface LiveRoom {
    roomStatus: number
    liveStatus: number
    url: string
    title: string
    cover: string
    online: number
    roomid: number
    roundStatus: number
    "broadcast_type": number
}
interface Profession {
    name: string
}
interface Series {
    "user_upgrade_status": number
    "show_upgrade_window": boolean
}