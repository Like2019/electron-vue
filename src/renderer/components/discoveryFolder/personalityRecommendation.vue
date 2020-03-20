<template>
  <div class="personMain">
      <!-- 走马灯 -->
    <el-carousel :interval="10000" type="card" height="180px">
      <el-carousel-item v-for="(item,index) in carouselList" :key="index">
        <el-image :src="item.pic" fit="cover"></el-image>
        <span class="imgTag">{{item.typeTitle}}</span>
      </el-carousel-item>
    </el-carousel>
<!-- 推荐歌单 -->
<div class="recommand">
    <div class="recommandTitle">
        <span class="recommandLeft">推荐歌单</span>
        <span class="recommandRight">更多></span>
    </div>
    <div class="recommandSongs">
        <li>
            <div class="weekDateArea">
            <span class="newWeek">星期一</span>
            <span class="nowDate">16</span>
            </div>
            <span class="liTitle">每日歌曲推荐</span>
        </li>
        <template v-for="(item,index) in recommandList">
        <li :key="index">
            <el-image class="musicCover" :src="item.picUrl" fit="cover"></el-image>
            <span class="audience">{{item.playCount%10000}}万</span>
             <span class="liTitle">{{item.name}}</span>
        </li>
        </template>
    </div>
</div>
<!-- 独家发送 -->
<div class="exclusive">
<div class="recommandTitle">
        <span class="recommandLeft">独家放送</span>
        <span class="recommandRight">更多></span>
    </div>
    <div class="exclusivePost">
        <template v-for="(item,index) in exclusiveList">
        <li :key="index">
            <el-image class="videoCover" :src="item.picUrl" fit="cover"></el-image>
            <span class="video"></span>
             <span class="liTitle">{{item.name}}</span>
        </li>
        </template>
    </div>
</div>
<!-- 最新音乐 -->
<div class="newMusicList">
<div class="recommandTitle">
        <span class="recommandLeft">最新音乐</span>
        <span class="recommandRight">更多></span>
    </div>

<div class="toppedCharts">
    <div class="toppedChartsLeft">
    <template v-for="(item,index) in topList">
        <li :key="index">
            <span class="indexNum">0{{index+1}}</span>
            <el-image :src="item.al.picUrl" fit="cover" class="topPicPath"></el-image>
            <div class="musicInfo">
                <span class="musicName">{{item.name}}</span>
                <span class="singerName">{{item.ar[0].name}}</span>
            </div>
            </li>
    </template>
    </div>
    <div class="toppedChartsRight">
    <template v-for="(item,index) in topList">
        <li :key="index" v-if="index>5">
            <span class="indexNum" v-if="index<=9">0{{index}}</span>
            <span class="indexNum" v-else>{{index}}</span>
            <el-image :src="item.al.picUrl" fit="cover" class="topPicPath"></el-image>
            <div class="musicInfo">
                <span class="musicName">{{item.name}}</span>
                <span class="singerName">{{item.ar[0].name}}</span>
            </div>
        </li>
    </template>
    </div>
    </div>

    <!-- 推荐MV -->
    <div class="recommendMV">
        <div class="recommandTitle">
        <span class="recommandLeft">推荐MV</span>
        <span class="recommandRight">更多></span>
    </div>

    <div class="mvArea">
        <template v-for="(item,index) in mvList">
        <li :key="index">
            <el-image fit='cover' :src="item.picUrl" class="mvCover"></el-image>
            <span class="audience">{{item.playCount}}</span>
            <div class="mvTitle">
                <span class="mvName wordHidden">{{item.copywriter}}</span>
                <span class="authorName wordHidden">{{item.artistName}}</span>
            </div>
        </li>
        </template>
    </div>

    </div>
    <!-- 主播电台 -->
    <div class="anchorArea">
        <div class="recommandTitle">
        <span class="recommandLeft">主播电台</span>
        <span class="recommandRight">更多></span>
    </div>
    <div class="anchroStation">
        <template v-for="(item,index) in anchroList">
        <li :key="index">
            <el-image fit='cover' :src="item.picUrl" class="stationCover"></el-image>
            <!-- <span class="redTag">付费精品</span> -->
            <span class="coverTag wordHidden">{{item.name}}</span>
            <span class="stationName wordHidden">{{item.copywriter}}</span>
        </li>
        </template>
    </div>
    </div>
    
</div>

  </div>
</template>

<script>
import Vue from 'vue'
// import{findBnner,recommandApi,privatecontentApi,topListApi,recommandMVApi,anchroApi} from '../../api/findApi'
export default {
    name:'personalityrecommendation',
    data(){
        return{
        carouselList:[],
        recommandList:[],
        exclusiveList:[],
        topList:[],
        mvList:[],
        anchroList:[]
        }
    },
    mounted(){
        // this.Initialization();
    },
    methods:{
        // 初始化接口
        Initialization(){
            // 走马灯
            findBnner().then((result) => {
                this.carouselList = result.data.banners;
            }).catch((err) => {
                console.log(err)
            });
            // 推荐歌单
        recommandApi({msg:'9'}).then((val)=>{
            this.recommandList = val.data.result
        })
        // 独家放送
        privatecontentApi().then((val)=>{
            this.exclusiveList = val.data.result
        })
        // 新歌榜
        topListApi({msg:'0'}).then((val)=>{
            this.topList = val.data.playlist.tracks
        })
        // MV
        recommandMVApi().then((val)=>{
            this.mvList = val.data.result
        })
        // 主播电台
        // anchroApi({msg:'5'}).then((val)=>{
        //     this.anchroList = val.data.list
        // })
        }
        
    }
}
</script>
<style scoped>
.personMain{
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
}
.recommand,.exclusive,.newMusicList,.recommendMV,.anchorArea,.hearArea,.lookArea{
    width: 100%;
    height: auto;
}
.recommandTitle{
    width: 100%;
    border-bottom: 1px solid #e1e1e2;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.recommandLeft{
    color: #333;
    font-size: 20px;
}
.recommandRight{
    font-size: 14px;
}
.recommandSongs{
    width: 100%;
    height: auto;
    display: inline-block;
}
.recommandSongs li{
    display: block;
    float: left;
    width: 136px;
    height: 175px;
    margin-top: 15px;
    margin-right: 15px;
    position: relative;
    cursor: pointer;
}
.weekDateArea{
    background: #fff;
    width: 134px;
    height: 135px;
    border: 1px solid #e5e5e5;
    border-radius: 2px;
}
.newWeek{
    display: block;
    width: 100%;
    height: 42px;
    line-height: 42px;
    text-align: center;
    color: #666;
}
.nowDate{
    display: block;
    color: #cc4a4a;
    font-size: 65px;
    text-align: center;
}
.liTitle{
    display: block;
    font-size: 13px;
    display: block;
    width: 100%;
    height: 40px;
    line-height: 20px;
    color: #333;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.recommandSongs li:nth-child(5n){
    margin-right: 0px;
}
.musicCover{
    width: 136px !important;
    height: 136px !important;
}
.audience{
    width: calc(100% - 10px);
    height: 20px;
    background: rgba(0, 0, 0, .3);
    display: block;
    position: absolute;
    top: 0;
    z-index: 2;
    font-size: 12px;
    color: #fff;
    text-align: end;
    line-height: 20px;
    padding-right: 10px;
}
/* 独家放送 */
.exclusivePost{
    display: flex;
    width: 100%;
    height: 160px;
    justify-content: space-between;
}
.exclusivePost li{
    width: 30%;
    height: 160px;
    margin-top: 15px;
}
.videoCover{
    width: 100%;
    height: auto !important;
}
/* 音乐排行榜 */
.toppedCharts{
    width: 741px;
    height: 300px;
    border: 1px solid #ededed;
    margin: 12px auto;
    overflow: hidden;
}
.toppedCharts li{
    width: 100%;
    height: 60px;
}
.toppedCharts li:nth-child(2n){
    background: #f5f5f7;
}
.toppedCharts li:nth-child(2n+1){
    background: #fafafa;
}
.toppedChartsLeft{
    float: left;
    width: 50%;
    height: 100%;
    border-right: 1px solid #ededed;
}
.toppedCharts li:hover{
    background: #e3e3e5;
}
/* 最新音乐 */
.indexNum{
    width: 38px;
    display: block;
    float: left;
    height: 100%;
    line-height: 60px;
    text-align: center;
    font-size: 12px;
}
.topPicPath{
    display: block;
    float: left;
    width: 40px !important;
    height: 40px !important; 
    margin-top: 10px;
    margin-right: 10px;
}
.musicInfo{
    width: auto;
    float: left;
    height: 40px;
    line-height: 20px;
    margin-top: 10px;
}
.musicName{
    color: #333;
    display: block;
    width: 100%;
    font-size: 14px;
}
.singerName{
    font-size: 12px;
    color: #666;
}
/* 推荐MV */
.mvArea{
    width: 100%;
    height: 190px;
    overflow: hidden;
}
.mvArea li{
    display: block;
    width: 235px;
    height: 190px;
    margin-top: 10px;
    float: left;
    margin-right: 18px;
    position: relative;
}
.mvArea li:nth-child(3){
    margin-right: 0px;
}
.mvCover{
    width: 235px !important;
    height: 136px !important;
}
.mvTitle{
    width: 100%;
    height: 54px;
    line-height: 20px;
}
.mvName{
    display: block;
    width: 100%;
    height: 20px;
    color: #333;
    font-size: 14px;
}
.authorName{
    display: block;
    width: 100%;
    height: 20px;
    font-size: 12px;
    color: #666;
}
/* 主播电台 */
.anchroStation{
    width: 100%;
    height: auto;
}
.anchroStation li{
    display: block;
    float: left;
    width: 138px;
    height: 168px;
    margin-right: 18px;
    margin-top: 10px;
    position: relative;
}
.anchroStation li:last-child{
    float: right;
    margin-right: 0;
}
.stationCover{
    width: 138px !important;
    height: 138px !important;
}
.stationName{
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
}
.redTag{
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    background: #d33a31;
    color: #fff;
    height: 18px;
    padding-left: 4px;
    padding-right: 8px;
    border-bottom-right-radius: 9px;
    line-height: 18px;
    font-size: 12px;
}
.coverTag{
    position: absolute;
    bottom: 30px;
    left: 0;
    width: 100%;
    height: 22px;
    line-height: 22px;
    color: #fff;
    font-size: 12px;
    text-indent: 6px;
}
.wordHidden{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.hearTag{
   position: absolute;
    top: 0;
    left: 0;
    width: auto;
    background: #ff2c55;
    color: #fff;
    height: 18px;
    padding-left: 4px;
    padding-right: 8px;
    border-bottom-right-radius: 9px;
    line-height: 18px;
    font-size: 12px; 
}
</style>
<style>
.personMain .el-image__inner,.personMain .el-image{
    width: 100%;
    height: 100%;
}
.personMain .imgTag{
    position: absolute;
    bottom: 20%;
    right: 0;
    background: #cc4a4a;
    color: #fff;
    padding-left: 10px;
    padding-right: 5px;
    height: 20px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    font-size: 12px;
    line-height: 20px;
}
.el-image__error{
    width: 136px;
    height: 136px;
}
</style>