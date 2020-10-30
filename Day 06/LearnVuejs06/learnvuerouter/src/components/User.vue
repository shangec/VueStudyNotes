<template>
  <div>
    <h2>我是用戶界面</h2>
    <p>我是用戶内容</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.userId}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      // $route处于活跃状态下的路由
      return this.$route.params.userId;
    },
  },
  methods: {
    btnClick() {
      console.log(this.$router);
      console.log(this.$route);
    },
  },
  created() {
    //组件创建后回调
    console.log("User created");
  },
  destroyed() {
    console.log("User destroyed");
  },
  // created() {
  //     //组件创建后回调
  //     console.log('created');
  //     document.title='用户';
  // }
};
</script>

<style scoped>
</style>