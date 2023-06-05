<template >
  <spinner></spinner>


    <div class="flex justify-start">
      <h1 class="header">Популярные сейчас
        <svg viewBox="0 0 1024 1024" class="icon_right" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"
        stroke="#000000">
        <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#ffffff"></path>
      </svg>
      </h1>
    </div>

    <!-- <div class="resSearchFiveFilms hidden flex-wrap gap-3 items-center align-top">

      <FilmsFormWithoutRating :responseFilms="responseFilms">
      </FilmsFormWithoutRating>

    </div> -->



  <div class="flex justify-start">
    <h1 class="header" @click="$router.push('/premieres')">Премьеры в этом месяце
      <svg viewBox="0 0 1024 1024" class="icon_right" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"
      stroke="#000000">
      <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#ffffff"></path>
    </svg>
    </h1>

   
  </div>


  <div class="resSearchFiveFilms hidden flex-wrap gap-3 items-center align-top">

    <FilmsFormWithoutRating :responseFilms="responseFilms">
    </FilmsFormWithoutRating>

  </div>



</template>

<script>
import { fetchMainTop } from '../hooks/fetch.js'
import FilmsFormWithoutRating from "../components/FilmsFormWithoutRating.vue";
import axios from "axios";
import Premieres from './Premieres.vue';

export default {
  components: {
    FilmsFormWithoutRating,
  },

  setup() {
    const { responseFilms, startSlice, endSlice, fetchRequest, X_API_KEY } =
      fetchMainTop();

    return {
      responseFilms,
      startSlice,
      endSlice,
      fetchRequest,
      X_API_KEY,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/Pages_styles/MainStyle.scss';


</style>