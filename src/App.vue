<template>
  <div id="app">
  <!--   <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <Footertab></Footertab>
  </div>
</template>

<script>
import Footertab from './components/tab/footer-tab'
export default {
  name: 'app',
  components:{ Footertab }
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
