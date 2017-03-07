<template lang="html">
  <div class="sidebar">
    <header>
      <img v-on:hover="" :src="src" :alt="alt">
      <h1>{{name}}</h1>
      <h2>{{intro}}</h2>
    </header>
    <nav>
      <ul>
        <li :class="{active: menu.id === activeId}" v-for="menu in menus" v-on:click="selected(menu.id)">{{menu.name}}</li>
      </ul>
    </nav>
    <footer>

    </footer>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  methods: {
    selected: function (id) {
        this.activeId = id;
    }
  },
  data () {
    return {
      src: 'https://avatars0.githubusercontent.com/u/23761319?v=3&s=460',
      alt: 'logo',
      name: 'zane',
      intro: 'intro',
      activeId: 1,
      menus: [
        {
          id: 1,
          url: './category/1',
          name: '全部文章',
        },
        {
          id: 2,
          url: './category/2',
          name: '分类一',
        },
        {
          id: 3,
          url: './category/3',
          name: '分类二',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  $white: #EEE;
  $black: #222831;
  $lineTop: #3c4149;
  $lineBottom: #525965;
  $radius: 8px 0 0 8px;
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100%;
    color: $white;
    background-color: $black;
    header {
      padding: 16px;
      text-align: center;
      img {
        display: block;
        margin: 0 auto;
        width: 50%;
        box-shadow: 0px 0px 16px 3px rgba(0,0,0,0.8);
        border-radius: 100%;
        transform: scale(1) rotate(360deg) skewY(0deg) skewX(0deg);
      }
    }
    nav {
      ul {
        border-top: 1px solid $lineTop;
        border-bottom: 1px solid $lineBottom;
        list-style-type: none;
        li {
          display: block;
          height: 56px;
          line-height: 56px;
          text-align: center;
          border-top: 1px solid $lineBottom;
          border-bottom: 1px solid $lineTop;
          cursor: pointer;
        }
        li:hover:not(.active) {
          border-radius: $radius;
          background-color: $lineTop;
          transition: 0.3s;
        }
        .active {
          color: #222831;
          background-color: $white;
          border-radius: $radius;
        }
      }
    }
  }
</style>
