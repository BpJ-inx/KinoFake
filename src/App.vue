<template>
  <cookieAsk v-if="isCookie"></cookieAsk>
  <header>
    <navbar></navbar>
  </header>

  <main>
    <router-view></router-view>
    <AuthAndRegForm></AuthAndRegForm>
  </main>

  <footer class="flex h-20">
  </footer>
</template>

<script>
import AuthAndRegForm from './components/AuthAndRegForm.vue'
import CookieAsk from './components/cookieAsk.vue'
import { isCookie, checkGuest, autoAuth } from './hooks/authorization.js'

export default {
  components: {
    AuthAndRegForm,
    CookieAsk
  },
  mounted() {
    checkGuest()
    autoAuth()
  },
  setup() {
    return {
      isCookie
    }
  }
}
</script>

<style lang="scss" scoped></style>