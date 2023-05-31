<template>
  <nav class="navbar  lg:px-4  px-2 flex flex-wrap items-center lg:py-2">
    <div class="flex-1 justify-between items-center p-1">
      <ulogobut @click="$router.push('/')"></ulogobut>
    </div>

    <label for="menu-toggle" class="lg:hidden block"><svg class="fill-current text-white"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg></label>
    <input class="hidden" type="checkbox" id="menu-toggle" />

    <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>
        <ul 
          class="lg:flex items-center justify-around bg-rgba(0, 0, 0, 0.95) first-letter:text-base text-white  py-3 lg:pt-0">
          <urandombut class="mt-3 lg:p-2 py-2 px-0 block mr-10"
            @click="$router.push('/movepage')">Random film</urandombut>
          <li>
            <usearchinputapi 
            class="mt-1 lg:p-2 py-2 px-0 mr-20" >
            </usearchinputapi>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
</template>

<script>


export default {
  name: 'navbar',

}

</script>

<style lang="scss" scoped>
@import '../../../assets/styles/UI_styles/UNavbarStyle.scss';

#menu-toggle:checked+#menu {
  display: block;
}
</style>






  