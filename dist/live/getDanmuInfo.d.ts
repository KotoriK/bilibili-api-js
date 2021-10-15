import { APIRequest, APIResponse } from "../api";
/**
 * 获取弹幕服务器
 *
 * @author KotoriK
 * @export
 * @param id
 * @param [type='0'] 0是直播，1是视频
 * @returns
 */
export declare function getDanmuInfo(id: number | string, type?: number | string): APIRequest<APIResponse<GetDanmuInfo_Data>>;
export interface GetDanmuInfo_Data {
    business_id: number;
    group: string;
    host_list: Array<DanmakuHost>;
    max_delay: number;
    refresh_rate: number;
    refresh_row_factor: number;
    token: string;
}
export interface DanmakuHost {
    host: string;
    port: number;
    ws_port: number;
    wss_port: number;
}
