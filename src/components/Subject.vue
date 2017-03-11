<template lang="html">
  <main>
    <article>
      <header>
        <h3></h3>
      </header>
      <div class="content">
        <p>123</p>
      </div>
      <footer>

      </footer>
    </article>
  </main>
</template>

<script>
export default {
  name: 'subject',
  data () {
    return {
      data: 1
    }
  }
}
</script>

<style lang="scss" scoped>
$small: "(max-width: 479px)";
$larger: "(min-width: 480px)";
$gray: #D0D0D0;

main {
  width: 100%;
  height: 100%;
  background-color: black;
}

article {
  background-color: white;
  margin: 0 auto;
  height: 100%;
  max-width: 1024px;
  border: 1px solid $gray;
}

</style>
