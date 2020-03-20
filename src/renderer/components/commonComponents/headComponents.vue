<template>
    <div class="headMain">
        <div class="Logoright">音乐在线</div>
        <div class="keyWord">
            <i class="backKey iconfont iconiconfonticonfonti2copycopy"></i>
            <i class="goKey iconfont iconzuojiantou_huaban"> </i>
        </div>
        <div class="searchInput">
            <input placeholder="请输入" >
            <i class="iconfont iconsuosou"></i>
        </div>
        <div class="headRight">
            <el-image fit='cover' src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584423156668&di=51e917b8873e745932298278adb20bce&imgtype=0&src=http%3A%2F%2Fimglf6.nosdn0.126.net%2Fimg%2FM0NSaWJxdk1MQzJwNms3dnNtZndvVUVwNEFOTE0zUEdlYjBLanlaTFN0QjBaMTlhaTZDZFl3PT0.png%3FimageView%26thumbnail%3D500x0%26quality%3D96%26stripmeta%3D0" class="headPic"></el-image>
            <span>未登录<i class="iconfont iconxiajiantou"></i></span>
            <span class="maginL13">开通VIP</span>
            <i class="iconfont iconyifu maginL13" @click="changeColor"></i>
            <i class="iconfont iconxinxi maginL26" @click="news"></i>
            <i class="iconfont iconshezhi1 maginL26" @click="seting"></i>
            <i class="line"></i>
            <i class="iconfont iconzuixiaohua" @click="miniApp"></i>
            <i class="iconfont iconicon-GIS_suoxiao maginL9" @click="minApp"></i>
            <i class="iconfont iconzuidahua maginL9" @click="maxApp" v-if="isMaxApp"></i>
            <i class="iconfont icontubiao-huanyuan maginL9" @click="resetApp" v-else></i>
            <i class="iconfont iconguanbi maginL9" @click="closeApp"></i>
        </div>
    </div>
</template>

<script>
export default {
    name:'headComponents',
    data(){
        return{
            ipc:'',
            isMaxApp:true
        }
    },
    beforeMount(){
        this.ipc = require('electron').ipcRenderer;
    },
    methods:{
        closeApp(){
            // 关闭窗口
            this.ipc.send('close-app');
        },
        minApp(){
            // 最小化窗口
            this.ipc.send('min-app');
        },
        resetApp(){
            // 还原app
            this.ipc.send('restore')
            this.isMaxApp = true;
        },
        maxApp(){
            // 最大化窗口
            this.ipc.send('max-app');
            this.isMaxApp = false;
        },
        // mini化
        miniApp(){
            console.log("窗口mini化")
        },
        // 设置
        seting(){
          console.log("设置")  
        },
        // 信息
        news(){
            console.log("信息入口")
        },
        // 切换窗口颜色
        changeColor(){
            console.log("切换颜色")
        }
    }
}
</script>

<style  scoped>
.headMain{
    width: calc(100% - 40px);
    height: 50px;
    background: #c62f2f;
    display: flex;
    align-items: center;
    padding: 0 20px;
   -webkit-app-region: drag;
   -webkit-user-select: none;
}
.Logoright{
    width: auto;
    float: right;
    color: #fff;
    font-size: 16px;
}
.keyWord{
    width: auto;
    height: 20px;
    line-height: 20px;
    margin-left: 30px;
}
.keyWord i{
    display: block;
    float: left;
    width: 20px;
    height: 20px;
    border: 1px solid #a82828;
    border-radius: 4px;
    text-align: center;
    color: #cf5151;
    font-size: 14px;
}
.goKey{
    margin-left: 3px;
}
.searchInput{
    width: 216px;
    height: 20px;
    line-height: 20px;
    margin-left: 10px;
    position: relative;
}
.searchInput input{
    width: 100%;
    background: #a82828;
    border: none;
    height: 20px;
    border-radius: 10px;
    text-indent: 10px;
     outline:0;
}
.searchInput i{
    font-size: 14px;
    position: absolute;
    right: 10px;
    color: rgba(255, 255, 255, .3);
    top: 1px;
}
.searchInput input::-webkit-input-placeholder{
    color: rgba(255, 255, 255, .3);
}
.headRight{
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    color: #eec1c1;
    position: fixed;
    right: 17px;
}
.headRight i{
    font-size: 14px;
    cursor: pointer;
    -webkit-app-region: no-drag;
}
.maginL9{
    margin-left: 9px;
}
.line{
    display: block;
    width: 1px;
    height: 20px;
    background: #a82828;
    margin: 0 18px;
}
.maginL26{
    margin-left: 26px;
}
.maginL13{
    margin-left: 13px;
}
.headRight span{
    display: block;
    width: auto;
    color: #eec1c1;
    font-size: 12px;
    cursor: pointer;
}
.headRight span i{
    margin-left: 10px;
}
.headPic{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 5px;
}
</style>