<template>
  <div id="app">
    <sidebar></sidebar>
    <catalog></catalog>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Catalog from './components/Catalog'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    Sidebar,
    Catalog
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #EEE;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
}
</style>
