import Vue from 'vue'
import Router from 'vue-router'
import ElementUl from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../assets/iconfont/iconfont.css'

Vue.use(ElementUl)

Vue.use(Router)

import publicHead from '../../renderer/components/commonComponents/headComponents'
import publicAside from '../../renderer/components/commonComponents/asideComponents'
import publicBottom from '../../renderer/components/commonComponents/bottomComponents'
// 发现音乐
import personalityrecommendation from '../../renderer/components/discoveryFolder/personalityrecommendation'
import songSheet from '../../renderer/components/discoveryFolder/songSheet'
import rankList from '../../renderer/components/discoveryFolder/rankList'
import singer from '../../renderer/components/discoveryFolder/singer'
import latestMusic from '../../renderer/components/discoveryFolder/latestMusic'

Vue.component('public-head',publicHead)
Vue.component('public-aside',publicAside)
Vue.component('public-bottom',publicBottom)
Vue.component('person-recommen',personalityrecommendation)
Vue.component('song-sheet',songSheet)
Vue.component('rank-list',rankList)
Vue.component('singer',singer)
Vue.component('latest-music',latestMusic)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/home').default,
      children: [
        {path: '', hidden: true, redirect: {path: '/privateFM'}},
        {
          path: 'findMusic',
          name: 'findMusic',
          component: require('@/components/mainPage/findMusic').default
        },
        {
          path: 'privateFM',
          name: 'privateFM',
          component: require('@/components/mainPage/privateFm').default
        },
      ]
    },
    {
      path: '*',
      redirect: '/'
    },
    
    
  ]
})
