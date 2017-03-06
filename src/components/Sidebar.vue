<template lang="html">
  <div class="sidebar">
    <header>
      <img :src="src" :alt="alt">
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

<style lang="css" scoped>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100%;
    color: #EEE;
    background-color: #222831;
  }

  header {
    padding: 16px;
    text-align: center;
  }

  img {
    display: block;
    margin: 0 auto;
    width: 50%;
    height: 50%;
    border-radius: 100%;
  }

  ul {
    border-top: 1px solid #3c4149;
    border-bottom: 1px solid #525965;
    list-style-type: none;
  }

  li {
    display: block;
    height: 56px;
    line-height: 56px;
    text-align: center;
    border-top: 1px solid #525965;
    border-bottom: 1px solid #3c4149;
    cursor: pointer;
  }

  li:hover {
    border-radius: 8px 0 0 8px;
    background-color: #3c4149;
    transition: 0.3s;
  }

  .active {
    color: #222831;
    background-color: #EEE;
    border-radius: 8px 0 0 8px;
  }

  .active:hover {
    background-color: #EEE;
  }
</style>
