<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import HeaderLayout from '@/layouts/HeaderLayout'
import { mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    EmptyLayout, HeaderLayout
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  methods: {
    ...mapActions({
      load: 'reactions/loadReactions'
    })
  },
  created () {
    this.load(1000)
  }
}
</script>

<style lang="scss">
  .btn {
    transition: all .4s ease-in-out;
  }
</style>
