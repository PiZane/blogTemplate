<template lang="html">
  <div class="catalog">
    <input type="text" name="search" value="" placeholder="请输入搜索关键字...">
    <ul>
      <li>{{data}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'catalog',
  created: function () {
    this.$parent.$on('menuSelected', this.showCatalog)
  },
  data() {
    return {
      data: '默认'
    }
  },
  methods: {
    showCatalog: function (id) {
      this.data = id;
    }
  }
}
</script>

<style lang="scss" scoped>
$white: #EEE;
$black: #222831;
.catalog {
  position: fixed;
  top: 0;
  left: 240px;
  width: 320px;
  height: 100%;
  opacity: 0.5;
  background-color: $white;
  border-right: 1px solid #D0D0D0;
  input {
    width: 100%;
    height: 54px;
    color: $black;
    background-color: $white;
    font: italic 20px arial,sans-serif;
    border: none;
    border-bottom: 2px solid #D0D0D0;
    padding-left: 10px;
  }
  input:focus {
    outline: none;
  }
  ul {
    list-style-type: none;
    li {
      width: 100%;
      height: 48px;
      line-height: 48px;
      cursor: pointer;
    }
    li:hover {
      background-color: #D0D0D0;
    }
  }
}
</style>
