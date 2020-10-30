<template>
  <h2>{{result}}</h2>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      result: "",
    };
  },
  created() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
    }).then((res) => {
      this.result = res;
    });
  },
};
</script>

<style>
</style>
