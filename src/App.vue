<template>
  <div id="app">
    <h1 class="title">
      hello world
    </h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {},
  data() {
    return {
      age: 10,
    }
  },
  mounted() {},
}
</script>

<style lang="less" scoped>
.title {
  color: @themeColor;
}
</style>
