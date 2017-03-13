<template lang="html">
  <div class="navbar">
    <header>
      <img :src="infos.src" :alt="infos.alt">
      <h1>{{infos.name}}</h1>
      <h2>{{infos.intro}}</h2>
    </header>
    <nav>
      <ul>
        <li :class="{active: menu.id === infos.activeMenu}"
        v-for="menu in infos.menus"
        v-on:click="selected(menu.id)">{{menu.name}}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  created () {
    this.$http.get('/api/setting').then(response => {
      this.infos = response.body.data;
    });
  },
  methods: {
    selected: function (id) {
        this.infos.activeMenu = id;
        this.$parent.$emit('menuSelected', id);
    }
  },
  data () {
    return {
      infos: {}
    }
  }
}
</script>

<style lang="scss" scoped>
  $phone: "(max-width: 767px)";
  $tablet: "(min-width: 768px) and (max-width: 1023px)";
  $desktop: "(min-width: 1024px)";
  $white: #EEE;
  $black: #222831;
  $gray:  #BBB;
  $size: 8px;
  $radius: 8px 0 0 8px;
  $menuTransition: transform ease .6s;
  .navbar {
    width: 250px;
    height: 100%;
    color: $white;
    background-color: $black;
    @media #{$phone} {
      width: 40%;
    }
    header {
      padding: $size*2;
      text-align: center;
      img {
        display: block;
        margin: 0 auto;
        width: 50%;
        box-shadow: 0px 0px $size*2 $size/2 rgba(255,255,255,0.2);
        border-radius: 100%;
      }
      img:hover {
        animation: rotate 1s linear infinite;
      }
      @keyframes rotate
      {
        0% {transform:rotate(0deg);}
        50% {transform:rotate(180deg);}
        100% {transform:rotate(360deg);}
      }
    }
    nav {
      padding: $size*2 0;
      overflow: hidden;
      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: $size 0;
        overflow: hidden;
        li {
          margin: $size 0;
          width: 80%;
          height: $size*7;
          line-height: $size*7;
          text-align: center;
          color: $gray;
          background-color: #393E46;
          border-radius: $radius;
          transition: $menuTransition;
          cursor: pointer;
          box-shadow: 0px 0px $size 0px rgba(0,0,0,0.75);
        }
        li:hover:not(.active) {
          color: $white;
          transform: translateX(10%);
          transition: $menuTransition;
        }
        .active {
          position: relative;
          color: $black;
          background-color: $white;
          border-radius: $radius;
          transform: translateX(10%);
          transition: none;
        }
        .active:before {
          content: '';
          position: absolute;
          box-sizing: padding-box;
          top: -$size;
          right: calc(10% - 4px);
          width: $size;
          height: $size;
          background: transparent;
          border-radius: 0 0 $size 0;
          border-right: $size/2 solid $white;
          border-bottom: $size/2 solid $white;
        }
        .active:after {
          box-sizing: padding-box;
          position: absolute;
          bottom: -$size;
          right: calc(10% - 4px);
          width: $size;
          height: $size;
          content: '';
          background: transparent;
          border-radius: 0 $size 0 0;
          border-top: $size/2 solid $white;
          border-right: $size/2 solid $white;
        }
      }
    }
  }
</style>
