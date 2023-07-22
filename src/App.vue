<template>
  <cookieAsk v-if="isCookie"></cookieAsk>
  <header>
    <navbar></navbar>
  </header>

  <main>
    <router-view></router-view>
    <AuthoAndRegForm></AuthoAndRegForm>
  </main>

  <footer class="flex h-20">
  </footer>
</template>

<script>
import AuthoAndRegForm from './components/AuthoAndRegForm.vue'
import CookieAsk from './components/cookieAsk.vue'
import { isCookie, checkGuest } from './hooks/authorization.js'

export default {
  components: {
    AuthoAndRegForm,
    CookieAsk
  },
  mounted() {
    checkGuest()
  },
  setup(){
    return{
      isCookie
    }
  }
}
</script>

<style lang="scss" scoped></style>