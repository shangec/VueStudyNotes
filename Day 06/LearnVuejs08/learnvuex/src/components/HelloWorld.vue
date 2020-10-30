<template>
  <div>
      <div>{{$store.state.counter}}</div>
      <h2>{{$store.getters.powerCounter}}</h2>
      <h2>{{$store.getters.more20stu}}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  // props:{
  //   counter: Number
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
