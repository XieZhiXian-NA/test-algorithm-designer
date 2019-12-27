<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="changeMessage">点击</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "vue-text"
    };
  },
  created() {
    this.message = "create-text";
  },
  methods: {
    changeMessage() {
      this.message = "click-text";
    }
  }
};
</script>
