<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <router-link to="/item-detail">Item Detail</router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Home Page'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
