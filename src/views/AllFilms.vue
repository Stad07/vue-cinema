<template>
  <div class="container-fluid films">
    <div class="container">
      <div class="row no-gutters">
        <h2>Выбери фильм на свой вкус</h2>
        <film-list :films="films" />
      </div>
    </div>
  </div>
</template>

<script>
import films from '@/mocks/films'
import FilmList from '@/components/FilmList'

export default {
  name: 'films',
  data () {
    return {
      films: []
    }
  },
  components: {
    FilmList
  },
  created () {
    this.films = films
  }
}
</script>

<style lang="scss">
  .films {
    background: #141414;
    height: 100%;
    h2 {
      color: #fefefe;
      padding: 20px 0;
    }
  }
</style>
