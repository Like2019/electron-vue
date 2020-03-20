<template>
  <div class="asideMain">
    <ul>
      <span class="asideTitle">推荐</span>
      <template v-for="(item,index) in asideData">
        <li :key="index" @click="clickFun(item,index)" :class="activeClass === index?'active':''">
          <i class="iconfont" :class="item.iconfont"></i>
          <span class="asideLi">{{item.asideTitle}}</span>
        </li>
      </template>
      <span class="asideTitle mgT10">我的音乐</span>
      <li>
          <i class="iconfont icontubiaozhizuomoban"></i>
          <span class="asideLi">本地音乐</span>
        </li>
        <li>
          <i class="iconfont iconxiazai"></i>
          <span class="asideLi">下载管理</span>
        </li>
        <span class="asideTitle mgT10">创建的歌单</span>
    </ul>

    <div class="currentSong">
      <el-image fit='cover' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584423156668&di=51e917b8873e745932298278adb20bce&imgtype=0&src=http%3A%2F%2Fimglf6.nosdn0.126.net%2Fimg%2FM0NSaWJxdk1MQzJwNms3dnNtZndvVUVwNEFOTE0zUEdlYjBLanlaTFN0QjBaMTlhaTZDZFl3PT0.png%3FimageView%26thumbnail%3D500x0%26quality%3D96%26stripmeta%3D0" class="songCover"></el-image>
      <div class="songsInfo">
        <div class="songsBaseInfo">
          <span class="songsName">风中有朵雨做的云风中有朵雨做的云</span>
          <span class="singerName">拉拉拉拉啊拉风中有朵雨做的云</span>
        </div>
        <div class="songsIcon">
          <i class="iconfont iconshoucang"></i>
          <i class="iconfont iconfenxiang"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "asideComponents",
  data() {
    return {
      activeClass:0,
      asideData: [
        {
          iconfont: "icontubiaozhizuomobanyihuifu-",
          asideTitle: "openlayers",
          path:'privateFM'
        },
        {
          iconfont: "iconyinle",
          asideTitle: "发现音乐",
          path:'findMusic'
        },
        {
          iconfont: "iconxinbanshipinzhibo",
          asideTitle: "LOOK直播",
          path:'findMusic'
        },
        {
          iconfont: "iconai-video",
          asideTitle: "视频",
          path:'findMusic'
        },
        {
          iconfont: "iconpengyou",
          asideTitle: "朋友",
          path:'findMusic'
        }
      ]
    };
  },
  methods:{
      clickFun(item,index){
        this.activeClass = index;
        this.$router.push('/'+item.path)
      }
  }
};
</script>

<style scoped>
.asideMain {
  width: 199px;
  background: #f5f5f7;
  border-right: 1px solid #e1e1e2;
  position: absolute;
  height: calc(100% - 50px);
  left: 0;
}
ul,
li {
  list-style: none;
  font-size: 12px;
}
ul {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
}
.asideTitle {
  display: block;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-indent: 15px;
  color: #7d7d7d;
}
li {
  display: block;
  width: calc(100%- 20px);
  height: 26px;
  line-height: 26px;
  padding-left: 20px;
  cursor: pointer;
  color: #5c5c5c;
}
li i {
  display: block;
  float: left;
  margin-right: 5px;
}
.asideLi {
  width: auto;
  height: 26px;
  line-height: 26px;
}
.mgT10{
    margin-top: 10px;
}
.active{
    background: #e6e7ea;
    border-left: 3px solid #c62f2f;
    color: #000;
}
/* 当前播放歌曲 */
.currentSong{
  width: 100%;
  height: 56px;
  border-top: 1px solid #e1e1e2;
  position: absolute;
  bottom: 48px;
  background: #f5f5f7;
}
.songCover{
  width: 44px;
  height: 44px;
  margin-top: 6px;
  margin-left: 5px;
  margin-right: 8px;
  float: left;
  cursor: pointer;
}
.songsInfo{
  width: calc(100% - 67px);
  height: 44px;
  margin-top: 6px;
  float: left;
}
.songsBaseInfo{
  float: left;
  width: 110px;
  height: 100%;
  font-size: 12px;
}
.songsName{
  display: block;
  width: 100%;
  height: 22px;
  line-height: 22px;
  color: #333;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}
.singerName{
  display: block;
  width: 70%;
  height: 22px;
  line-height: 22px;
  color: #999;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}
.songsIcon{
  float: right;
  width: 16px;
  height: 44px;
  line-height: 22px;
}
.songsIcon i{
  display: block;
  width: 100%;
  height: 22px;
  font-size: 12px;
  cursor: pointer;
}

</style>