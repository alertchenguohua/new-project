<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- <test></test> -->
    <display />
    <div id="nav">
      <router-link to="/home">
        Go to home
      </router-link>
      <router-link to="/about">
        Go to about
      </router-link>
      <router-link to="/form">
        Go to form
      </router-link>
      <router-link to="/table">
        Go to table
      </router-link>
      <router-link to="/tree">
        Go to tree
      </router-link>
    </div>

    <router-view />
    <!-- <div v-for="(item, index) in obj.a" :key="index"></div> -->
  </div>
</template>

<script>
import display from './views/display/display'
import HelloWorld from './components/HelloWorld.vue'
// import test from './views/test/test'

export default {
  name: 'App',
  provide() {
    return {
      app: this,
      obj: {}
    }
  },
  components: {
    HelloWorld,
    // test,
    display
  },
  created () {
    // const error = new Error('test error')
    // error.code = -1
    // throw error

  },
  methods: {
    appMethod() {
      console.log('app')
    }
  }
}
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
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
