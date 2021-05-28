<template>
  <div class="app-header-layout">
    <main-header />
    <main class="main-wrapper">
      <router-view />
    </main>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader'

export default {
  components: { MainHeader }
}
</script>

<style lang="scss" scoped>

</style>
