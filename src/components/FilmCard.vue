<template>
  <div>
    <figure>
      <img :src="film.img" :alt="film.title">
      <figcaption><strong>{{ film.title }}</strong></figcaption>
      <router-link
        :to="{ name: 'film', params: { id: film.id } }"
      >
        Подробнее о фильме
      </router-link>
    </figure>
  </div>
</template>

<script>

export default {
  props: {
    film: { type: Object }
  }
}
</script>

<style lang="scss" scoped>
  figure {
    position: relative;
    img {
      object-fit: fill;
      width: 100%;
    }
    figcaption {
      color: #fefefe;
      font-size: 28px;
      line-height: 4rem;
      background: linear-gradient(90deg, rgba(0,0,0,1) 30%, rgba(255,255,255,0) 100%);
      strong {
        letter-spacing: .05rem;
      }
    }
  }
  a {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    left: 0;
    right: 0;
    top: 0;
    bottom: 4rem;
    text-decoration: none;
    color: #fefefe;
    font-size: 26px;
    font-weight: bold;
    background: rgba(0,0,0, 0.5);
    opacity: 0;
    transition: opacity .3s ease;
    &:hover {
      opacity: 1;
    }
  }
</style>
