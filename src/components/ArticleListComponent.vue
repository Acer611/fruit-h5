<template>
  <!--文章列表展示展示 -->
  <div class="mescroll mescroll-bar">
    <ul class ="data-list">
      <li v-for="article in articleList"
          v-bind:key="article.titleID"
          v-bind:value ="article.titleID"
          v-on:click = "getArticleDetail(article.titleID)">
        <div class="box">
          <div class ="article-content" >
            <!-- 封面图取三张-->
            <div class="picture" v-for="image in article.imageList.slice(0,3)"
              v-bind:key="image">
              <img class="picok" :src="image" alt="">
            </div>
            <div class="title">
              <div class="title1">
                <div class ="title2">
                  {{article.title}}
                </div>
              </div>
            </div>
            <div class="source">{{article.magazineName}} </div>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'ArticleListComponent',
  props: ['articleList'],

  mounted: function () {
    this.getArticleDetail() // 定义方法
  },
  methods: {
    getArticleDetail (titleID) {
    // 查看详情
      this.$router.push({name: 'ArticleDetailComponent', params: {titleID: titleID}})
    }
  }
}
</script>

<style scoped>

  * {
    border: 0;
    margin: 0;
    padding: 0;
  }

  .mescroll {
    position: fixed;
    top: 40px;
    bottom: 1px;
    height: auto;
  }
  .mescroll {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
  ul, menu, dir {
    display: block;
    list-style-type: disc;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  .box {
    width: 100%;
    border-top: 5px solid #eee;
    overflow: hidden;
  }
  .article-content {
    height: auto;
    padding: 10px 0px;
    width: calc( 100% - 20px );
    margin: 0 auto;
  }
  .article-content .picture {
    height: 105px;
    width: 140px;
    float: right;
    margin-left: 10px;
    overflow: hidden;
  }

  .article-content .title {
    height: 66px;
    margin: 0 0 7px;
    display: table;
    overflow: hidden;
    _position: relative;
    position: relative;
  }

  .source {
    overflow: hidden;
    font-size: 12px;
    line-height: 32px;
    color: #999;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .picok {
    width: 100%;
    height: 100%;
    background-size: cover!important;
  }
  .article-content .title1{
    vertical-align: middle;
    display: table-cell;
    _position: absolute;
    _top: 50%;
  }
  .article-content .title2 {
    _position: relative;
    _top: -50%;
    line-height: 22px;
    font-size: 16px;
    color: #000;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-weight: 400;
  }
  .download-tip {
    z-index: 990;
    position: fixed;
    top: 0px;
    left: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    text-align: center;
    color: white;
    -webkit-transition: top 300ms;
    transition: top 300ms;
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
</style>
