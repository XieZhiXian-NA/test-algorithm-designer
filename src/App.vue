<template>
  <div id="app">
    <h1 id="message"> {{ title }}</h1>
    <button @click="changeTitle">点击</button>
  </div>
</template>

<script>

export default {
  name: "app",
  data() {
    return {
      title: "开课吧"
    };
  },
  methods: {
    changeTitle() {
      this.title = "点击文案";
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
