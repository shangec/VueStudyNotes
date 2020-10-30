<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>-->
    <!-- <button @click="homeClick">首頁</button>
    <button @click="aboutClick">關於</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- <router-link v-bind:to="'/user/'+userId">用户</router-link>
    <router-link :to="{path: '/profile', query: {name: 'Chris', age: 18}}">档案</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <!-- <router-view></router-view> -->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "zhangsan",
    };
  },
  methods: {
    homeClick() {
      // 通過代碼的方式修改路由 vue-router
      // push => pushState
      // this.$router.push('/home');
      this.$router.replace("/home");
      console.log("homeClick");
    },
    aboutClick() {
      // this.$router.push('/about');
      this.$router.replace("/about");
      console.log("aboutClick");
    },
    userClick() {
      this.$router.push("/user/" + this.userId);
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "kobe",
          age: "17",
        },
      });
    },
  },
};
</script>

<style>
/* .router-link-active{
  color: red;
} */
.active {
  color: red;
}
</style>
