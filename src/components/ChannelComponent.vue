<template>
  <!--频道展示-->
  <div>
  <div  id = "channel" class="header">
    <div class="scrollx mescroll-touch-x">
      <div class="scrollx-content">
        <ul class="nav">
          <li  class ="active" v-for="(channel) in channelList"
               v-bind:key="channel.channelGuid"
               v-bind:value="channel.channelGuid"
               v-on:click = "getArticleList(channel.channelGuid)">{{ channel.channelName }}</li>
        </ul>

      </div>

    </div>
  </div>
  <ArticleListComponent :articleList="articleList"></ArticleListComponent>
  </div>
</template>

<script>
import ArticleListComponent from './ArticleListComponent'
export default {
  name: 'channel',
  components: {ArticleListComponent},
  data: function () {
    return {
      channelList: [],
      articleList: []
    }
  },

  mounted: function () {
    this.getChannelList() // 定义方法
  },
  methods: {
    getChannelList: function () {
      var _this = this
      var url = '/api/article/home?userGuid=2d68bf7a-5d89-4a3c-be98-aee9eb6fdf74'
      this.$axios.get(url)
        .then(function (response) { // 接口返回数据
          _this.channelList = response.data.channelEntityList
          _this.articleList = response.data.articleInfoEntityList
        }
        )
    },
    getArticleList: function (channelGuid) {
      var _that = this
      var listurl = '/api/article/findNewArticleList?userGuid=2d68bf7a-5d89-4a3c-be98-aee9eb6fdf74&channelGuid=' + channelGuid
      this.$axios.get(listurl)
        .then(function (response2) { // 接口返回数据
          _that.articleList = response2.data.articleInfoEntityList
        })
      // 查看详情
      // this.$router.push({name: 'ArticleListComponent', params: {channelGuid: channelGuid}})
    }
  }
}

</script>

<style scoped>

  .scrollx {
    height: 40px;
    overflow: hidden;
  }
  * {
    border: 0;
    margin: 0;
    padding: 0;
  }
  .header {
    z-index: 9990;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 16px;
    text-align: center;
    border-bottom: 1px solid #eee;
    background-color: #fff;
  }
  .scrollx-content {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
  }
  .nav {
    padding: 0 8px;
  }
  li, ul {
    list-style: none;
  }
  .nav li {
    display: inline-block;
    padding: 12px 8px 10px;
    margin-bottom: 20px;
    vertical-align: middle;
  }
  .active {
    border-bottom: 0px solid #0080ff;
  }

</style>
