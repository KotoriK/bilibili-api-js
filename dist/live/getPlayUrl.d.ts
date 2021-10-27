import { APIRequest, APIResponse } from "../api";
export interface QualityDescription {
    qn: number;
    desc: string;
}
export interface Durl {
    url: string;
    length: number;
    order: number;
    stream_type: number;
    p2p_type: number;
}
export interface GetPlayUrl_Data {
    current_quality: number;
    accept_quality: Array<string>;
    current_qn: number;
    quality_description: Array<QualityDescription>;
    durl: Array<Durl>;
}
export interface GetPlayUrl_Option {
    cid: number;
    platform?: 'h5' | 'web';
    qn?: number;
}
export declare function getPlayUrl(opt: GetPlayUrl_Option): APIRequest<APIResponse<GetPlayUrl_Data>>;
