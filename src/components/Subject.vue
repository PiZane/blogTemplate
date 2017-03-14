<template lang="html">
  <main>
    <article>
      <header>
        <h1>{{article.title}}</h1>
      </header>
      <div class="content">
        {{article.content}}
        1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>1<br/>
      </div>
      <footer>
        <ul>
          <li v-for="tag in article.tags">{{tag}}</li>
        </ul>
      </footer>
    </article>
  </main>
</template>

<script>
export default {
  name: 'subject',
  created: function () {
    this.$parent.$on('articleSelected', this.changeArticle)
  },
  data () {
    return {
      article: false,
    }
  },
  methods: {
    changeArticle: function (id) {
      this.$http.get('/api/article').then(response => {
        this.article = response.body.data;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
$phone: "(max-width: 767px)";
$tablet: "(min-width: 768px) and (max-width: 1023px)";
$desktop: "(min-width: 1024px)";
$gray: #D0D0D0;

main {
  width: 100%;
  height: 100%;
  @media #{$tablet} {
    position: absolute;
    top: 0;
    left: 0;
  }
  overflow: auto;
}

article {
  padding: 16px 32px;
  height: 100%;
  max-width: 1024px;
  font-size: 20px;
  @media #{$tablet} {
    margin: 0 auto;
    width: 60%;
  }
  h1 {
    font-size: 42px;
  }
  h2 {
    font-size: 36px;
  }
  h3 {
    font-size: 30px;
  }
}

</style>
