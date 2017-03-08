<template lang="html">
  <div class="sidebar">
    <header>
      <img v-on:hover="" :src="src" :alt="alt">
      <h1>{{name}}</h1>
      <h2>{{intro}}</h2>
    </header>
    <nav>
      <ul>
        <li :class="{active: menu.id === activeId}"
        v-for="menu in menus"
        v-on:click="selected(menu.id)">{{menu.name}}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  methods: {
    selected: function (id) {
        this.activeId = id;
        this.$parent.$emit('changeCatalog', id);
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
        {
          id: 4,
          url: './category/4',
          name: '分类三',
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  $white: #EEE;
  $black: #222831;
  $gray:  #BBB;
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
      }
    }
    nav {
      overflow: hidden;
      ul {
        list-style-type: none;
        padding: 5px 0 5px 0;
        li {
          display: block;
          margin-top: 12px;
          margin-left: 15%;
          width: 85%;
          height: 54px;
          line-height: 54px;
          text-align: center;
          color: $gray;
          background-color: #393E46;
          border-radius: $radius;
          transition: transform .5s;
          cursor: pointer;
          box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        }
        li:hover:not(.active) {
          color: $white;
          transform: translateX(10%);
          transition: transform .8s;
        }
        .active {
          color: $black;
          background-color: $white;
          border-radius: $radius;
          transform: translateX(10%);
          transition: transform .5s;
        }
      }
    }
  }
</style>
