<template>
  <div class="container-fluid films">
    <div class="container">
      <h2>{{ film.title }}</h2>
      <div class="line" />
      <figure>
        <img :src="film.img" :alt="film.title">
      </figure>
      <div class="section">
        <p class="accent">Немного о сюжете</p>
        <p>{{ film.description }}</p>
      </div>
      <div class="section">
        <p class="accent">Рейтинг</p>
        <p>{{ film.rating }}</p>
      </div>
      <div class="section">
        <p class="accent">Актерский состав</p>
        <p>{{ film.actors.join(', ') }}</p>
      </div>
      <div class="section">
        <p class="accent">Режиссеры</p>
        <p>{{ film.directors.join(', ') }}</p>
      </div>

      <div class="line" />

      <div class="review">
        <div class="section">
          <h3>Смотрели данный фильим ?</h3>
          <span>Оставьте отзыв</span>
        </div>
        <ul class="reactions">
          <li
            v-for="reaction in reactions"
            :key="reaction.id"
          >
            {{ reaction.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import films from '../mocks/films'
import { mapGetters } from 'vuex'

export default {
  name: 'film',
  data () {
    return {
      film: null
    }
  },
  created () {
    const film = films.find(film => film.id === this.$route.params.id)
    if (film) {
      this.film = film
    }
  },
  computed: {
    ...mapGetters({
      getReactions: 'reactions/getReactions'
    }),
    reactions () {
      return this.getReactions
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    padding-bottom: 40px;
  }
  figure {
    margin-top: 30px;
    img {
      object-fit: fill;
      width: 100%;
    }
  }
  h2 {
    padding-bottom: 0;
  }
  h3 {
    color: #fefefe;
    padding: 20px 0 0;
  }
  .accent {
    color:  #F15B32;
    font-weight: bold;
    font-size: 1.2rem;
  }
  p {
    margin: 10px 0;
    color: #fff;
  }
  .line {
    height: 1px;
    background: linear-gradient(90deg,#F15B32 30%, rgba(255,255,255,0) 100%);
  }
  span {
    color:  #F15B32;
  }
  .review {
    overflow: hidden;
  }
  ul, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  li {
    float: left;
    border: 1px solid #A4A4A4;
    border-radius: 3px;
    margin-right: 10px;
    color: #fff;
    padding: 3px 7px;
    margin-top: 10px;
    cursor: pointer;
  }
</style>
