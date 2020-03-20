<template>
  <div class="songSheetMain">
    <el-popover placement="bottom" width="540" trigger="click">
      <div class="allTagsArea">
        <span class="allTagsTitle">添加标签</span>
        <span class="allTagsSongSheet">全部歌单</span>
        <div class="allTagsDiv">
            <template v-for="item in allTagList">
          <li class="allTagsLi" :key="item.id">
            <div class="liLeft">
              <i class="iconfont" :class="item.tagIcon"></i> {{item.tagName}}
            </div>
            <div class="liRight">
                <template v-for="key in item.singleTagList">
              <li class="tagsName" :key="key.id" :class="key.isSelect?borderRed:''" @click="clickHotTag(key)">
                  {{key.singleTagName}}
                  <span class="isHot" v-show="key.isHot">HOT</span>
                  <span class="isActive" v-show="key.isSelect"></span>
              </li>
              </template>
            </div>
          </li>
          </template>
        </div>
      </div>
      <button slot="reference" class="chooseButton">
        {{selectTag}}
        <i class="iconfont iconxiajiantou1"></i>
      </button>
    </el-popover>

    <!-- 标签 -->
    <div class="hotTag">
      <span class="firstHotTag">热门标签:</span>
      <template v-for="(item,index) in hotTagList">
        <li :key="index">
          <span class="hotTagLiSpan" @click="clickHotTag(item)">{{item.name}}</span>
        </li>
      </template>
    </div>
    <!-- 热门歌曲 -->
    <div class="hotSongsList">
      <template v-for="item in 8">
        <div class="songsSheetFirstLi" :key="item">
          <div class="songsSheetBg">
            <span class="songsSheetName">精选歌单</span>
            <span class="goSongSheet">立即进入</span>
          </div>
          <span class="songSheetTitle">精品歌单倾心推荐,给最懂音乐得你</span>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "songSheet",
  data() {
    return {
      selectTag: "全部歌单",
      hotTagList: [
        { name: "华语" },
        { name: "流行" },
        { name: "摇滚" },
        { name: "民谣" },
        { name: "电子" },
        { name: "另类/独立" },
        { name: "轻音乐" }
      ],
      allTagList: [
        {
          tagName: "语种",
          tagIcon: "iconmao",
          id: "1",
          singleTagList: [
            {
              singleTagName: "华语",
              id: "11",
              isHot: true,
              isSelect:false
            },
            {
              singleTagName: "日语",
              id: "12",
              isHot: false,
              isSelect:false
            },
            {
              singleTagName: "欧美",
              id: "13",
              isHot: false,
              isSelect:false
            },
            {
              singleTagName: "韩语",
              id: "14",
              isHot: true,
              isSelect:false
            }
          ]
        },
        {
          tagName: "风格",
          tagIcon: "iconmao",
          id: "2",
          singleTagList: [
            {
              singleTagName: "华语",
              id: "21",
              isHot: false,
              isSelect:false
            },
            {
              singleTagName: "日语",
              id: "22",
              isHot: true,
              isSelect:false
            },
            {
              singleTagName: "欧美",
              id: "23",
              isHot: false,
              isSelect:false
            },
            {
              singleTagName: "韩语",
              id: "24",
              isHot: false,
              isSelect:false
            }
          ]
        },
        {
          tagName: "场景",
          tagIcon: "iconmao",
          id: "3",
          singleTagList: [
            {
              singleTagName: "华语",
              id: "31",
              isHot: false,
              isSelect:false
            },
            {
              singleTagName: "日语",
              id: "32",
              isHot: false,
              isSelect:false
            },
            {
              singleTagName: "欧美",
              id: "33",
              isHot: false,
              isSelect:false
            },
            {
              singleTagName: "韩语",
              id: "34",
              isHot: false,
              isSelect:false
            },{
              singleTagName: "华语",
              id: "35",
              isHot: false,
              isSelect:false
            },
            {
              singleTagName: "日语",
              id: "36",
              isHot: false,
              isSelect:false
            },
            {
              singleTagName: "欧美",
              id: "37",
              isHot: false,
              isSelect:false
            },
            {
              singleTagName: "韩语",
              id: "38",
              isHot: false,
              isSelect:false
            },{
              singleTagName: "华语",
              id: "39",
              isHot: false,
              isSelect:false
            },
            {
              singleTagName: "日语",
              id: "75",
              isHot: false,
              isSelect:false
            },
            {
              singleTagName: "欧美",
              id: "74",
              isHot: false,
              isSelect:false
            },
            {
              singleTagName: "韩语",
              id: "76",
              isHot: false,
              isSelect:false
            }
          ]
        },
        {
          tagName: "主题",
          tagIcon: "iconmao",
          id: "4",
          singleTagList: [
            {
              singleTagName: "华语",
              id: "41",
              isHot: false,
              isSelect:false
            },
            {
              singleTagName: "日语",
              id: "42",
              isHot: false,
              isSelect:false
            },
            {
              singleTagName: "欧美",
              id: "43",
              isHot: false,
              isSelect:false
            },
            {
              singleTagName: "韩语",
              id: "44",
              isHot: true,
              isSelect:false
            }
          ]
        }
      ]
    };
  },
  mounted(){
      let self = this;
      this.allTagList.map((item)=>{
          for(let i in item.singleTagList){
              item.singleTagList[i].isSelect = false;
              if(self.selectTag === item.singleTagList[i].singleTagName){
                  item.singleTagList[i].isSelect = true;
                  console.log(item.singleTagList[i])
              }
          }
      })
  },
  methods: {
    clickHotTag(val) {
      this.selectTag = val.name?val.name:val.singleTagName;
      let self = this;
      this.allTagList.map((item)=>{
          for(let i in item.singleTagList){
              item.singleTagList[i].isSelect = false;
              if(self.selectTag === item.singleTagList[i].singleTagName){
                  item.singleTagList[i].isSelect = true;
              }
          }
      })
    }
  }
};
</script>

<style scoped>
.songSheetMain .chooseButton {
  padding: 0px 10px;
  background: #fff;
  border: none;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  border: 1px solid #e1e1e2;
  border-radius: 4px;
  cursor: pointer;
}
.songSheetMain .chooseButton i {
  font-size: 12px;
  margin-left: 5px;
}
.chooseButton:hover {
  background: #f5f5f7;
}
/* 热门标签 */
.hotTag {
  width: 100%;
  height: 32px;
  font-size: 12px;
}
.firstHotTag {
  float: left;
  display: block;
  width: auto;
  color: #333;
  height: 12px;
  line-height: 12px;
  margin-top: 10px;
}
.hotTag li {
  float: left;
  display: block;
  padding: 0 18px;
  width: auto;
  height: 12px;
  line-height: 12px;
  margin-top: 10px;
  border-right: 1px solid #d4ccd4;
  color: #666;
}
.hotTagLiSpan {
  width: auto;
}
.hotTagLiSpan:hover {
  color: #333;
  cursor: pointer;
}
.hotTag li:last-child {
  border: none;
}
/* 人们歌曲 */
.hotSongsList {
  width: 100%;
  height: auto;
}
.songsSheetFirstLi {
  width: 177px;
  height: 215px;
  float: left;
  margin-right: 10px;
  margin-top: 10px;
  line-height: 12px;
}
.songsSheetFirstLi:nth-child(4n) {
  margin-right: 0px;
}
.songsSheetBg {
  width: 177px;
  height: 177px;
  background: #070708;
  position: relative;
}
.songsSheetName {
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: #fff;
  position: absolute;
  top: 30px;
  text-align: center;
}
.goSongSheet {
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: #fff;
  position: absolute;
  top: 80px;
  text-align: center;
}
.songSheetTitle {
  display: block;
  width: 100%;
  height: 40px;
  line-height: 18px;
  font-size: 14px;
  color: #333;
  padding-top: 2px;
}
/* 全部标签 */
.allTagsArea{
    width: 100%;
    height: auto;
}
.allTagsTitle{
    display: block;
    width: 100%;
    height: 46px;
    line-height: 46px;
    border-bottom: 1px solid #e1e1e2;
    font-size: 14px;
    color: #333;
    text-indent: 20px;
}
.allTagsSongSheet{
    display: block;
    width: 498px;
    border: 1px solid #e1e1e2;
    height: 33px;
    font-size: 12px;
    color: #666;
    text-align: center;
    line-height: 33px;
    margin: 10px auto;
}
.allTagsDiv{
    display: inline-block;
    width: calc(100% - 40px);
    height: auto;
}
.allTagsLi{
    display: inline-block;
    width: 100%;
    height: auto;
    margin-left: 20px;
    margin-bottom: 10px;
}
.liLeft{
    float: left;
    width: 83px;
    height: auto;
    font-size: 14px;
    color: #ce4e4e;
    display: flex;
    align-items: center;
}
.liLeft i{
    font-size: 26px;
    color: #e09494;
    margin-right: 10px;
}
.liRight{
    display: inline-block;
    width: auto;
    height: auto;
    max-width: calc(100% - 115px);
    border-left: 1px solid #e1e1e2;
    border-top: 1px solid #e1e1e2;
}
.tagsName{
    display: block;
    float: left;
    width: auto;
    height: 34px;
    line-height: 34px;
    border: 1px solid #e1e1e2;
    border-left: 0;
    border-top: 0px;
    padding: 0 24px;
    position: relative;
    cursor: pointer;
}
.isHot{
    position: absolute;
    top: 1px;
    right: 2px;
    font-size: 8px;
    color: #c62f2f;
    height: 8px;
    line-height: 8px;
}
.isActive{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    font-size: 10px;
    text-align: center;
    line-height: 17px;
    color: #fff;
    border: 17px solid;
    border-top-color: transparent;
    border-left-color:transparent;
    border-right: none;  
    border-bottom-color: #c62f2f; 
}
.borderRed{
    border-color: #c62f2f !important;
}
</style>
<style>
.popper__arrow {
  left: 38px !important;
}
.el-popover {
  left: 230px !important;
  max-height: 416px;
  padding: 0px;
}
</style>