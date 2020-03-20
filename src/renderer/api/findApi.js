import axios from 'axios'
import Vue from 'vue'
Vue.prototype.API_URL = 'http://localhost:3000'
console.log(Vue.prototype.API_URL)
//个性推荐==》走马灯
export const findBnner = params => {
    return axios.create({
        baseURL: Vue.prototype.API_URL,
    }).get('/banner?type=3', params).then(response => response)
};
// 个性推荐 ==》 推荐歌单
export const recommandApi = params => {
    return axios.create({
        baseURL: Vue.prototype.API_URL,
    }).get('/personalized?limit='+params.msg, params).then(response => response)
};
// 个性推荐 ==》 独家放送
export const privatecontentApi = params => {
    return axios.create({
        baseURL: Vue.prototype.API_URL,
    }).get('/personalized/privatecontent', params).then(response => response)
};
// 个性推荐 ==》 音乐排行榜 0新歌榜 1热歌榜 2原创 3飙升 4电音 5UK 6billboard周榜
export const topListApi = params => {
    return axios.create({
        baseURL: Vue.prototype.API_URL,
    }).get('/top/list?idx='+params.msg, params).then(response => response)
};
// 个性推荐 ==》 推荐MV
export const recommandMVApi = params => {
    return axios.create({
        baseURL: Vue.prototype.API_URL,
    }).get('/personalized/mv', params).then(response => response)
};
// 个性推荐 ==》 主播电台
// export const anchroApi = params => {
//     return axios.create({
//         baseURL: Vue.prototype.API_URL,
//     }).get('/dj/toplist/popular?limit='+params.msg, params).then(response => response)
// };
