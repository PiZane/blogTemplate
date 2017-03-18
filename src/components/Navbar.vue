<template lang="html">
  <div class="navbar">
    <header>
      <img :src="navbarData.logoUrl" :alt="navbarData.logoAlt">
      <h1>{{navbarData.name}}</h1>
      <h2>{{navbarData.intro}}</h2>
    </header>
    <nav>
      <ul>
        <li :class="{active: menu.id === navbarData.activeMenu}"
        v-for="menu in navbarData.menus"
        v-on:click="selected(menu.id)">{{menu.name}}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: ['initData', 'api'],
  created () {
    if (this.initData) {
      this.navbarData = this.initData;
    } else {
      this.$ajax.get(this.api)
      .then(function (response) {
        this.navbarData = response;
      });
    }
  },
  methods: {
    selected: function (id) {
        this.navbarData.activeMenu = id;
        this.$parent.$emit('menuSelected', id);
    }
  },
  data () {
    return {
      navbarData: {}
    }
  }
}
</script>

<style lang="scss" scoped>
  $phone: "(max-width: 767px)";
  $tablet: "(min-width: 768px) and (max-width: 1023px)";
  $desktop: "(min-width: 1024px)";
  $white: #F0F0F0;
  $black: #222831;
  $gray:  #BBB;
  $size: 8px;
  $radius: 8px 0 0 8px;
  $menuTransition: transform cubic-bezier(.5, .2, .1, 1) .8s;
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
          @media #{$phone} {
            cursor: default;
          }
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
          transition: $menuTransition;
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
          animation: delay .6s 1;
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
          animation: delay .6s 1;
        }
        @keyframes delay
        {
          0% {opacity: 0;}
          50% {opacity: 0;}
          100% {opacity: 1;}
        }
      }
    }
  }
</style>
