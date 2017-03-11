<template>
<div id="app">
  <div v-bind:class="{side:1, hide: isHideSide}">
    <navbar></navbar>
    <catalog v-on:toggleSide="toggleSide"></catalog>
  </div>
  <subject></subject>
</div>
</template>

<script>
import Navbar from './components/Navbar'
import Catalog from './components/Catalog'
import Subject from './components/Subject'

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
    Navbar,
    Catalog,
    Subject
  }
}
</script>

<style lang="scss">
$small: "(max-width: 479px)";
$larger: "(min-width: 480px)";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  min-width: 1280px;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  background-color: #EEE;
  @media #{$small} {
    display: block;
    min-width: 100%;
  }
}

#app {
  height: 100%;
  min-height: 640px;
  display: flex;
  @media #{$small} {
    display: block;
  }
}

.side {
  display: flex;
  align-items: stretch;
  width: 600px;
  height: 100%;
  min-height: 640px;
  transition: ease-out 1s;
  @media #{$small} {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
}

.hide {
  transform: translateX(-100%);
  transition: ease-out 1s;
}
</style>
