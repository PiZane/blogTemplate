<template lang="html">
  <div class="catalog">
    <input type="text" name="search" value="" placeholder="请输入搜索关键字...">
    <ul>
      <li>{{data}}</li>
    </ul>
    <i v-on:click="toggleSide" :style="image"></i>
  </div>
</template>

<script>
export default {
  name: 'catalog',
  created: function () {
    this.image.backgroundImage = this.left;
    this.$parent.$on('menuSelected', this.changeCatalog)
  },
  data() {
    return {
      data: '默认',
      left: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDg5MTI0MTYzOTAxIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1MzYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTk2Ljk5MiAxMDIzLjgxOWgxNTYuMTMxbC0zMjYuMDU0LTUxMS44MTkgMzI2LjA1NC01MTEuODE5aC0xNTYuMTMxbC0zMjYuMTE0IDUxMS44MTl6IiBwLWlkPSIxNTM3IiBmaWxsPSIjNzA3MDcwIj48L3BhdGg+PC9zdmc+")',
      image: {
        backgroundImage: '',
      },
    }
  },
  methods: {
    changeCatalog: function (id) {
      this.data = id;
    },
    toggleSide: function () {
      this.$emit('toggleSide');
    }
  }
}
</script>

<style lang="scss" scoped>
$white: #EEE;
$black: #222831;
$gray:  #D0D0D0;
.catalog {
  position: relative;
  width: 320px;
  opacity: 0.5;
  background-color: $white;
  border-right: 1px solid $gray;
  input {
    width: 100%;
    height: 54px;
    color: $black;
    background-color: $white;
    font: italic 20px arial,sans-serif;
    border: none;
    border-bottom: 2px solid $gray;
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
      background-color: $gray;
    }
  }
  i {
    position: absolute;
    display: block;
    margin-top: -32px;
    top: 50%;
    right: -24px;
    width: 24px;
    height: 64px;
    cursor: pointer;
    background-size: 100% 100%;
    background-color: white;
    background-repeat: no-repeat;
    border: 1px solid $gray;
    transition: .3s;
  }
  i:hover {
    background-color: $gray;
    transition: .3s;
  }
}
</style>
