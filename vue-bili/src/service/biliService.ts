import { KeepLiveWS } from 'bilibili-live-ws';

// fix Buffer is not defined
import {Buffer} from 'buffer'
window.Buffer = window.Buffer || Buffer;

class danmakuItem{
    public userId: number;
    public content: string;

    constructor(_userId: number, _content: string = "") {
        this.userId = _userId;
        this.content = _content;
    }
};

export default class BiliService {

    private static instance: BiliService;

    static getInstance(): BiliService {
        if (this.instance) {
            return this.instance;
        }

        this.instance = new BiliService;

        return this.instance;
    }

    public danmakuQueue: danmakuItem[] = [];
    public roomId: number = 21495945;

    constructor() {
        //this.danmakuQueue = [];

        console.log("start dammu");

        const live: KeepLiveWS = new KeepLiveWS(this.roomId); //room id

        // 当前情况当断线又重连时，会有重复的弹幕..
        live.on('open', () => {
            console.log('已连接直播弹幕服务器');
        });
        live.on('live', () => {
            console.log('已连接直播间', this.roomId);
        });
        live.on('close', () => console.log('已断开与直播弹幕服务器的连接'));
        live.on('heartbeat', online => console.log('当前人气值', online));

        const addDanmaku = async (dmItem: danmakuItem) => {
            this.danmakuQueue.push(dmItem);
        }

        // 弹幕
        live.on('DANMU_MSG', ({ info: [, message, [uid, uname, isOwner /*, isVip, isSvip*/]] }) => {
            // if (isBlockedUID(uid)) {
            // console.log(`屏蔽了来自[${uname}]的弹幕：${message}`);
            // return;
            // }
            // const danmaku = {
            // type: 'message',
            // showFace: giftShowFace.value,
            // uid,
            // uname,
            // message,
            // isAnchor: uid === props.anchor,
            // isOwner: !!isOwner,
            // };
            // if (props.delay > 0) setTimeout(() => addDanmaku(danmaku), props.delay * 1000);
            // else addDanmaku(danmaku);
            addDanmaku(new danmakuItem(uid, message));

            console.log(`来自[${uname}]的弹幕：${message} size ${this.danmakuQueue.length}`);

        });
    }

    destory

}

