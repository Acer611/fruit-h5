<template>
    <div class = "container">
      <div class="top">
        <h1>{{articleInfo.title}}</h1>
        <div class="source">来源：{{articleInfo.magazineName}} &nbsp; 作者：{{articleInfo.author}}</div>
      </div>
      <!-- 文章主体-->
      <div class="content" v-html="articleInfo.articleContent">
        <p class="banquan">版权支持: 龙源</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'articleDetail',
  data: function () {
    return {
      articleInfo: ''
    }
  },

  mounted: function () {
    this.getArticleInfo() // 定义方法
  },
  methods: {
    getArticleInfo: function () {
      var titleID = this.$route.params && this.$route.params.titleID
      var _this = this
      var url = '/api/article/QueryArticle?titleId=' + titleID + '&userGuid=null' + '&channelId=380bf790bad9487ba6ef4b046f08f2b9'
      this.$axios.get(url)
        .then(function (response) { // 接口返回数据
          _this.articleInfo = response.data
        }
        )
    }
  },
  beforeRouteLeave (to, from, next) {
    if (to.path === '/') {
      to.meta.keepAlive = true
    } else {
      to.meta.keepAlive = false
    }
    next()
  }
}
</script>

<style scoped>
  .container {
    margin: 0 auto;
    clear: both;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .top {
    box-sizing: border-box;
    width: 88%;
    margin: 0 auto 20px;
  }
  h1 {
    margin: 15px auto;
    font-size: 2.0rem;
    width: 100%;
    color: #111;
    line-height: 30px;
    font-weight: 500;
  }
  .source {
    width: 100%;
    line-height: 18px;
    font-size: 1.2rem;
    color: #999;
  }
  .content {
    box-sizing: border-box;
    width: 88%;
    margin: 0 auto;
    font-size: 1.6rem;
    line-height: 25px;
    color: #333;
  }
</style>
