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
}

article {
  margin: 0 auto;
  height: 100%;
  max-width: 1024px;
  @media #{$tablet} {
    width: 60%;
  }
}

</style>
