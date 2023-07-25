<template>
  <nav class="navbar lg:px-4 flex flex-wrap justify-center items-center lg:py-2">
    <div class="flex-1 p-1">
      <ulogobut @click="$router.push('/')"></ulogobut>
    </div>

    <label for="menu-toggle" class="lg:hidden block mr-3"><svg class="fill-current text-white"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg></label>
    <input class="hidden " type="checkbox" id="menu-toggle" />

    <div class="menu hidden  lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>
        <ul
          class="lg:flex items-center justify-around bg-rgba(0, 0, 0, 0.95) first-letter:text-base text-white  py-3 lg:pt-0">
          <li>
            <ubutton class="butRandom mt-3 lg:p-2 py-2 px-0 block mr-10" @click="$router.push('/movepage')">Random film
            </ubutton>
          </li>
          <li>
            <usearchinputapi class="mt-1 lg:p-2 py-2 px-0 mr-20">
            </usearchinputapi>
          </li>


          <li v-if="!isAuth">
            <ubutton class="menu__Personal_page mt-3 lg:p-2 py-2 px-0 block mr-5" @click="checkAuth">Sign In
            </ubutton>
          </li>

          <div class="flex" v-else>
            <li>
              <ubutton class="menu__Personal_page mt-3 lg:p-2 py-2 px-0 block mr-5" @click="checkAuth">Personal
                Page
              </ubutton>
            </li>
            <li>
              <ubutton class="menu__exit block mt-3 lg:p-2 py-2 px-0  mr-1" @click="exitFromProfile">Exit
              </ubutton>
            </li>
          </div>

        </ul>
      </nav>
    </div>
  </nav>
</template>

<script>

import { checkAuth, exitFromProfile, isAuth } from '.././../../hooks/authorization.js'

export default {
  name: 'navbar',
  created() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector('.navbar').style.top = "0";
      } else {
        document.querySelector('.navbar').style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }
  },
  methods: {


  },

  setup() {

    return {
      checkAuth,
      exitFromProfile,
      isAuth
    }
  }
}


</script>

<style lang="scss" scoped>
@import '../../../assets/styles/UI_styles/UNavbarStyle.scss';

#menu-toggle:checked+#menu {
  display: block;
}
</style>






  