<template >
  <spinner></spinner>



  <div class="flex flex-col">
    <div class="flex ">
      <h1 class="header " @click="$router.push('/popnow')">Popular now
        <svg viewBox="0 0 1024 1024" class="icon_right" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"
          stroke="#000000">
          <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#ffffff"></path>
        </svg>
      </h1>
    </div>

    <div class="resSearchFiveFilms flex flex-wrap gap-7  align-top">
      <FilmsFormWithoutRating 
      :responseFilms="prevRespTop">
      </FilmsFormWithoutRating>

    </div>
  </div>

  <div class="flex flex-col">
    <div class="flex ">
      <h1 class="header" @click="$router.push('/premieres')">Premieres this month
        <svg viewBox="0 0 1024 1024" class="icon_right" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"
          stroke="#000000">
          <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#ffffff"></path>
        </svg>
      </h1>
    </div>


    <div class="resSearchFiveFilms flex flex-wrap gap-7 items-center align-top">

      <FilmsFormWithoutRating 
      :responseFilms="prevRespPremiers">
      </FilmsFormWithoutRating>

    </div>
  </div>

  <div class="flex flex-col">
    <div class="flex justify-start">
      <h1 class="header" @click="$router.push('/bestfilms')">Best of all time
        <svg viewBox="0 0 1024 1024" class="icon_right" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"
          stroke="#000000">
          <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#ffffff"></path>
        </svg>
      </h1>
    </div>
    <div class="resSearchFiveFilms flex flex-wrap gap-7 items-center align-top">

      <FilmsFormWithoutRating 
      :responseFilms="prevRespBest">
      </FilmsFormWithoutRating>

    </div>
  </div>

</template>

<script>
import { fetchMainTop } from '../hooks/fetch.js'
import FilmsFormWithoutRating from "../components/FilmsFormWithoutRating.vue";

export default {
  components: {
    FilmsFormWithoutRating,
  },

  setup() {
    const { prevRespPremiers, prevRespTop, prevRespBest } = fetchMainTop()

    return {
      prevRespPremiers,
      prevRespTop,
      prevRespBest
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/Pages_styles/MainStyle.scss';
</style>