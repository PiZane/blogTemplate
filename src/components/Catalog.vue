<template lang="html">
  <div class="catalog">
    <input type="text" name="search" value="" placeholder="请输入搜索关键字...">
    <ul>
      <li v-for="article in articles" v-on:click="getArticle(article.id)">{{article.title}}</li>
    </ul>
    <i v-on:click="toggleSide" :style="image"></i>
  </div>
</template>

<script>
export default {
  name: 'catalog',
  created: function () {
    this.image.backgroundImage = this.right;
    this.$parent.$on('menuSelected', this.changeCatalog)
  },
  data () {
    return {
      articles: [

      ],
      isShow: false,
      left: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDg5MjE3Nzg0MjI1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQyNjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNjcxLjk2OCA5MTJjLTEyLjI4OCAwLTI0LjU3Ni00LjY3Mi0zMy45NTItMTQuMDQ4TDI4Ni4wNDggNTQ1Ljk4NGMtMTguNzUyLTE4LjcyLTE4Ljc1Mi00OS4xMiAwLTY3Ljg3MmwzNTEuOTY4LTM1MmMxOC43NTItMTguNzUyIDQ5LjEyLTE4Ljc1MiA2Ny44NzIgMCAxOC43NTIgMTguNzIgMTguNzUyIDQ5LjEyIDAgNjcuODcybC0zMTguMDE2IDMxOC4wNDggMzE4LjAxNiAzMTguMDE2YzE4Ljc1MiAxOC43NTIgMTguNzUyIDQ5LjEyIDAgNjcuODcyQzY5Ni41NDQgOTA3LjMyOCA2ODQuMjU2IDkxMiA2NzEuOTY4IDkxMnoiIHAtaWQ9IjQyNjYiIGZpbGw9IiM4YThhOGEiPjwvcGF0aD48L3N2Zz4=")',
      right: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDg5MjE3ODkxNDE5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ2MDMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNzYxLjA1NiA1MzIuMTI4YzAuNTEyLTAuOTkyIDEuMzQ0LTEuODI0IDEuNzkyLTIuODQ4IDguOC0xOC4zMDQgNS45Mi00MC43MDQtOS42NjQtNTUuNDI0TDM5OS45MzYgMTM5Ljc0NGMtMTkuMjY0LTE4LjIwOC00OS42MzItMTcuMzQ0LTY3Ljg3MiAxLjg4OC0xOC4yMDggMTkuMjY0LTE3LjM3NiA0OS42MzIgMS44ODggNjcuODcybDMxNi45NiAyOTkuODQtMzE1LjcxMiAzMDQuMjg4Yy0xOS4wNzIgMTguNC0xOS42NDggNDguNzY4LTEuMjQ4IDY3Ljg3MiA5LjQwOCA5Ljc5MiAyMS45ODQgMTQuNjg4IDM0LjU2IDE0LjY4OCAxMiAwIDI0LTQuNDggMzMuMzEyLTEzLjQ0bDM1MC4wNDgtMzM3LjM3NmMwLjY3Mi0wLjY3MiAwLjkyOC0xLjYgMS42LTIuMzA0IDAuNTEyLTAuNDggMS4wNTYtMC44MzIgMS41NjgtMS4zNDRDNzU3Ljc2IDUzOC44OCA3NTkuMiA1MzUuMzkyIDc2MS4wNTYgNTMyLjEyOHoiIHAtaWQ9IjQ2MDQiIGZpbGw9IiM4YThhOGEiPjwvcGF0aD48L3N2Zz4=")',
      image: {
        backgroundImage: '',
        right: '-31px',
        borderRadius: '',
      },
    }
  },
  methods: {
    changeCatalog: function (id) {
      this.$http.get('/api/articles').then(response => {
        this.articles = response.body.data;
      });
    },
    toggleSide: function () {
      this.$emit('toggleSide');
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.image.backgroundImage = this.left;
        this.image.right = '-1px';
        this.image.borderRadius = '64px 0 0 64px';
      } else {
        this.image.backgroundImage = this.right;
        this.image.right = '-31px';
        this.image.borderRadius = '0 64px 64px 0';
      }
    },
    getArticle: function (id) {
      this.$emit('getArticle', id);
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
$gray:  #D0D0D0;
.catalog {
  position: relative;
  width: 350px;
  color: $black;
  background-color: rgba(240,240,240,0.6);
  border-right: 1px solid $gray;
  z-index: -1;
  @media #{$phone} {
    width: 60%;
  }
  @media #{$tablet} {
    position: absolute;
    top: 0;
    left: 250px;
    height: 100%;
  }
  input {
    width: 100%;
    height: 64px;
    color: $black;
    background-color: rgba(240,240,240,0.6);
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
      display: block;
      padding: 0 16px;
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
    @media #{$desktop} {
      display: none;
    }
    position: absolute;
    display: block;
    margin-top: -32px;
    top: 50%;
    width: 32px;
    height: 64px;
    cursor: pointer;
    background-size: 100% 100%;
    background-color: #EFEFEF;
    background-repeat: no-repeat;
    border: 1px solid $gray;
    border-radius: 0 64px 64px 0;
    transition: .3s;
  }
  i:hover {
    background-color: $gray;
    transition: .3s;
  }
}
</style>
