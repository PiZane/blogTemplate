<template lang="html">
<p>{{data}}</p>
</template>

<script>
export default {
  name: 'catalog',
  created: function () {
    this.$parent.$on('changeCatalog', this.showCatalog)
  },
  data() {
    return {
      data: '默认'
    }
  },
  methods: {
    showCatalog: function (id) {
      this.data = id;
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin-left: 300px;
}
</style>
