<template>
    <div class="findMian">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="个性推荐" name="first">
            <person-recommen></person-recommen>
            </el-tab-pane>
            <el-tab-pane label="歌单" name="second">
                <song-sheet></song-sheet>
            </el-tab-pane>
            <el-tab-pane label="主播电台" name="third">
                <rank-list></rank-list>
            </el-tab-pane>
            <el-tab-pane label="排行榜" name="fourth">
                <rank-list></rank-list>
            </el-tab-pane>
            <el-tab-pane label="歌手" name="five">
                <singer></singer>
            </el-tab-pane>
            <el-tab-pane label="最新音乐" name="six">
                <latest-music></latest-music>
            </el-tab-pane>
        </el-tabs>
        
    </div>
</template>
<script>
export default {
    name:'findMusic',
    data(){
        return{
            activeName:'second'
        }
    },
    methods:{
        handleClick(tab){
            console.log(tab)
        }
    }
}
</script>
<style scoped>
.findMian{
    width: calc(100% - 60px);
    padding: 0 30px;
}
</style>
<style>
.el-tabs__item:hover,.el-tabs__item.is-active{
    color: #c62f2f !important;
}
.el-tabs__active-bar{
    background: #c62f2f;
}
.el-tabs__nav-wrap{
    display: flex;
    justify-content: center;
}
</style>