<template>
<div id="app">
  <div v-bind:class="{side:1, show: sideShow}">
    <navbar :initData="initData.navbar"></navbar>
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
  props: ['initData'],
  data () {
    return {
      sideShow: 0
    }
  },
  methods: {
    toggleSide: function() {
      if (this.sideShow) {
        this.sideShow = 0;
      } else {
        this.sideShow = 1;
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
$phone: "(max-width: 767px)";
$tablet: "(min-width: 768px) and (max-width: 1023px)";
$desktop: "(min-width: 1024px)";
$sideTransition: cubic-bezier(1, 0, .1, 1) .6s;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
}

html {
  height: 100%;
}

body {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  background-color: #EEE;
}

#app {
  height: 100%;
  display: flex;
  overflow: hidden;
  @media #{$phone} {
    display: block;
    position: relative;
  }
}

.side {
  display: flex;
  align-items: stretch;
  width: 600px;
  height: 100%;
  transition: $sideTransition;
  z-index: 1;
  @media #{$phone} {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    transform: translateX(-100%);
  }
  @media #{$tablet} {
    transform: translateX(-100%);
  }
}

.show {
  transform: translateX(0);
  transition: $sideTransition;
}

::-webkit-scrollbar {
  width: 5px;
  background-color: #BBB;
  @media #{$phone} {
    width: 2px;
  }
}

::-webkit-scrollbar-thumb {
  background-color: #999;
}
</style>
