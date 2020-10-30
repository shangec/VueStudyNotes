<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "/home/news",
    };
  },
  created() {
    //组件创建后回调
    console.log("home created");
    // document.title='首页';
  },
  destroyed() {
    console.log("home destroyed");
  },
  // 这两个函数，只有该组件被保持了状态使用了keep-alive时，才是有效的
  activated() {
    this.$router.push(this.path);
  },
  // deactivated() {
  //   this.path = this.$route.path;
  // },
  beforeRouteLeave(to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  },
  // mounted() {
  //     //template挂载到document上时回调
  //     console.log('mounted');
  // },
  // updated() {
  //     // 页面更新时回调
  //     console.log('updated');
  // },
};
</script>

<style scoped>
</style>