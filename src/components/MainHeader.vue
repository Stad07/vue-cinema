<template>
  <header class="main-header">
    <div class="container">
      <div class="row no-gutters">
        <router-link
          class="logo"
          :to="{name: 'mainPage'}"
        >
          Кинотеатр
        </router-link>
        <div class="links">
          <router-link
            class="link"
            :to="{name: 'films'}"
          >
            Фильмы
          </router-link>
          <button
            type="button"
            class="btn btn-outline-light btn-sm"
            @click="onAuthBtnCkick"
          >
            {{ getUser ? 'Выйти' : 'Войти' }}
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getUser: 'user/getUser'
    })
  },
  methods: {
    ...mapActions({
      setUser: 'user/setUser',
      deleteUser: 'user/deleteUser'
    }),
    onAuthBtnCkick () {
      if (this.getUser) {
        localStorage.removeItem('user')
        this.deleteUser()
        this.$router.push({ name: 'mainPage' })
      } else {
        localStorage.setItem('user', true)
        this.setUser(localStorage.getItem('user'))
      }
    }
  },
  create () {
    this.setUser(localStorage.getItem('user'))
  }
}
</script>

<style lang="scss">
.main-header {
  position: relative;
  background-color: #0c0c0c;
  padding: 20px 0;
  .row {
    display: flex;
    align-items: center;
  }
  .links {
    display: flex;
    flex-grow: 1;
    margin-left: 75px;
  }
  .logo {
    color: #F15B32;
  }
  a {
    position: relative;
    display: inline-block;
    color: #fefefe;
    text-decoration: none;
    font-weight: 700;
    font-size: 25px;
    padding: 0 0 1px 0;
    &::after {
      position: absolute;
      display: inline-block;
      content: '';
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1.5px;
      background: #F15B32;
      opacity: 0;
    }
    &:hover:after {
      opacity: 1;
      transition: opacity 0.3s ease;
    }
  }
  button {
    margin-left: auto;
  }
}

</style>
