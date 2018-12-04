import Vue from 'vue'
import Router from 'vue-router'
import ArticleDetailComponent from '../components/ArticleDetailComponent.vue'
import ChannelComponent from '../components/ChannelComponent'
import ArticleListComponent from '../components/ArticleListComponent'

Vue.use(Router)

export default new Router({
  // 路由配置
  routes: [
    {
      path: '/',
      component: ChannelComponent,
      meta: {
        keepAlive: false // 此组件需要被缓存
      }
    },
    {
      path: '/ArticleList/:channelGuid',
      name: 'ArticleListComponent',
      component: ArticleListComponent,
      meta: {
        keepAlive: true // 此组件需要被缓存
      }
    },
    {
      path: '/ArticleDetailComponent/:titleID',
      name: 'ArticleDetailComponent',
      component: ArticleDetailComponent,
      props: true,
      meta: {
        keepAlive: false // 此组件需要被缓存
      }
    }

  ],

  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }

})
