<template>
  <div id="app">
    <div v-bind:class="{side:1, hide: isHideSide}">
      <sidebar></sidebar>
      <catalog v-on:toggleSide="toggleSide"></catalog>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Catalog from './components/Catalog'

export default {
  name: 'app',
  data () {
    return {
      isHideSide: 0
    }
  },
  methods: {
    toggleSide: function() {
      if (this.isHideSide) {
        this.isHideSide = 0;
      } else {
        this.isHideSide = 1;
      }
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

html {
  height: 100%;
}

body {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  background-color: #EEE;
}

#app {
  height: 100%;
}

.side {
  display: flex;
  align-items: stretch;
  width: 560px;
  height: 100%;
  min-height: 640px;
  transition: .8s;
}

.hide {
  margin-left: -560px;
  transition: .8s;
}
</style>
