<template>
  <div class="film-list">
    <film-card
      class="film-card"
      v-for="film in films"
      :key="film.id"
      :film="film"
    />
  </div>
</template>

<script>
import FilmCard from '@/components/FilmCard'

export default {
  props: {
    films: {
      type: Array,
      default: () => []
    }
  },
  components: { FilmCard }
}
</script>

<style lang="scss" scoped>

</style>
