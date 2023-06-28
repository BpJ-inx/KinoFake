<template>
  <header>
    <navbar></navbar>
  </header>

  <main>
    <router-view></router-view>
    <AuthoAndRegForm></AuthoAndRegForm>
  </main>

  <footer>
  </footer>
</template>

<script>
import AuthoAndRegForm from './components/AuthoAndRegForm.vue'
export default {
  components: {
    AuthoAndRegForm,
  },
}
</script>

<style lang="scss" scoped>
</style>