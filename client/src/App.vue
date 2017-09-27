<template>
  <div id="app">
    <header>LOGO</header>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  header {
    background: #ccc;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    text-align: left;
  }
</style>
