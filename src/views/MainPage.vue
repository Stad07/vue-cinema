<template>
  <div class="container-fluid">
    <div class="row main-page">
      <h1>Онлайн-кинотеатр</h1>
      <button type="button"
        class="btn btn-outline-light btn-sm"
        @click="$router.push({ name: 'films' })"
      >
        Перейти к фильмам
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainPage'
}
</script>

<style lang="scss">
  .main-page {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    color: #fefefe;
  }
</style>
