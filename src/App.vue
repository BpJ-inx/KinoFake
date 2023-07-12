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
  mounted() {
    localStorage.setItem('freeIDUser', 0) ///уникальные id пользоавтелей которые бы хронились на сервере...

    if (localStorage.getItem('guestID') || document.cookie.match(new RegExp("(?:^|; )" + 'cookie__user_id'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))) {
      localStorage.setItem('guestID', `guest${document.cookie.match(new RegExp("(?:^|; )" + 'cookie__user_id'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))[1]}`)
    }

    if (!document.cookie.match(new RegExp("(?:^|; )" + 'cookie__user_id'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))) {
      let freeIDUser = localStorage.getItem('freeIDUser')
      let ask = confirm("We use cookies. Its OK?")
      if (ask) {
        document.cookie = (`cookie__user_id= ${freeIDUser}`)
        localStorage.setItem('guestID', `guest${document.cookie.match(new RegExp("(?:^|; )" + 'cookie__user_id'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))[1]}`)
        localStorage.setItem(`reviews.${localStorage.getItem('guestID')}`,JSON.stringify([]))
        localStorage.setItem('freeIDUser', +localStorage.getItem('freeIDUser') + 1)
      } else {
        localStorage.removeItem('guestID')
      }
    }

  },
}
</script>

<style lang="scss" scoped></style>