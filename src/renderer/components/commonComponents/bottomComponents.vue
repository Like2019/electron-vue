<template>
  <div class="bottomMain">
    <div class="prvMusic musicButton">
      <i class="iconfont iconshangyishou"></i>
    </div>
    <div class="playMusic musicButton">
      <i class="iconfont iconziyuan"></i>
    </div>
    <div class="nextMusic musicButton">
      <i class="iconfont iconxiayishou"></i>
    </div>
    <div class="playSlide">
      <span class="startTime">00:00</span>
      <el-slider v-model="value1" :show-tooltip="false"></el-slider>
      <span class="startTime">00:00</span>
    </div>
    <span class="soundQuality">标准</span>
    <i class="effectIcon iconfont iconmao"></i>
    <span class="effectIcon iconfont" :class="orderIcon" @click="changeOrderIcon"></span>
    <span class="word" :class="worderActive?'wordActive':''" @click="showWordActive">词</span>
    <div class="playOrderArea">
        <i class="iconfont iconbofangliebiao"></i>
        <span class="songsNum">51</span>
    </div>
    <span class="videoIcon iconfont iconyinlianglabashengyin"></span>

  </div>
</template>

<script>
export default {
  name: "bottomComponents",
  data() {
    return {
      value1: 0,
      orderIcon:'iconbofangliebiao',
      worderActive:false
    };
  },
  mounted(){
  },
  methods:{
      changeOrderIcon(){
          console.log("切换播放列表");
      },
    //   是否显示歌词
    showWordActive(){
        this.worderActive = !this.worderActive;
    }
  }
};
</script>
<style scoped>
.bottomMain {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.prvMusic {
  width: 30px;
  height: 30px;
  margin-left: 30px;
}
.playMusic {
  width: 34px;
  height: 34px;
  margin-left: 24px;
}
.musicButton {
  background: #e83c3c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
}
.nextMusic {
  width: 30px;
  height: 30px;
  margin-left: 24px;
}
.playSlide {
  margin-left: 32px;
  width: 522px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.startTime {
  width: auto;
  color: #696969;
  font-size: 10px;
}
.playSlide .el-slider {
  width: 436px;
}
.soundQuality {
  width: auto;
  height: 15px;
  line-height: 15px;
  border: 1px solid #666;
  color: #666;
  font-size: 10px;
  padding: 0 6px;
  margin-left: 34px;
  margin-right: 20px;
  cursor: pointer;
}
.effectIcon{
    display: block;
    width: 16px;
    height: 16px;
    font-size: 16px;
    color: #999;
    margin-right: 10px;
    cursor: pointer;
}
.word{
    display: block;
    width: 16px;
    height: 16px;
    font-size: 12px;
    text-align: center;
    line-height: 16px;
    color: #666;
    border: 1px solid #666;
    margin-right: 10px;
    cursor: pointer;
}
.wordActive{
    background: #666;
    color: #fff;
}
.playOrderArea{
    width: auto;
    height: 16px;
    line-height: 16px;
    margin-right: 18px;
    cursor: pointer;
}
.playOrderArea i{
    display: block;
    float: left;
    width: 14px;
    height: 16px;
    font-size: 18px;
}
.songsNum{
    display: block;
    float: left;
    width: 28px;
    height: 16px;
    font-size: 12px;
    color: #333;
    background: #e1e1e2;
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    text-indent: 6px;
}
.videoIcon{
    display: block;
    width: 14px;
    height: 14px;
    cursor: pointer;
}

</style>>
<style>
.bottomMain .el-slider__bar{
background: #e83c3c;
}
.bottomMain .el-slider__button{
    width: 12px;
    height: 12px;
    border: 1px solid #c2c2c4;
}
.bottomMain .el-slider__runway{
    background: #c2c2c4;
}
</style>
