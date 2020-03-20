<template>
    <div class="main">
      <public-head></public-head>
      <public-aside></public-aside>
       <div class="contPge">
         <router-view></router-view>
       </div>
       <div class="bottomArea">
         <public-bottom></public-bottom>
       </div>
      </div>
    
</template>

<script>

  export default {
    name: 'home',
    methods: {
    //   open (link) {
    //     this.$electron.shell.openExternal(link)
    //   }
    }
  }
</script>
<style>
body{
  margin: 0;
}
li{
  list-style: none;
}
</style>
<style scoped>
.main{
  width: 100%;
  height: 100%;
  position: absolute;
}
.contPge{
  position: relative;
  width: calc(100% - 200px);
  background: #fafafa;
  height: calc(100% - 100px);
  left: 200px;
  overflow: hidden;
  overflow-y: auto;
  margin-bottom: 49px;
}
.bottomArea{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 48px;
  border-top: 1px solid #e1e1e2;
  background: #f6f6f8;
}
</style>