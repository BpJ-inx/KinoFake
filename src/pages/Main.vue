<template >
  <spinner v-if="!isLoaded"></spinner>
  <div v-if="isLoaded">


    <div class="flex flex-col">
      <div class="flex ">
        <h1 class="header " @click="$router.push('/popnow')">Popular now
          <urightarrow></urightarrow>
        </h1>
      </div>

      <div class="resSearchFiveFilms flex flex-wrap gap-7  align-top">
        <FilmsFormWithoutRating :responseFilms="prevRespTop">
        </FilmsFormWithoutRating>

      </div>
    </div>

    <div class="flex flex-col">
      <div class="flex ">
        <h1 class="header" @click="$router.push('/premieres')">Premieres this month
          <urightarrow></urightarrow>
        </h1>
      </div>


      <div class="resSearchFiveFilms flex flex-wrap gap-7 items-center align-top">

        <FilmsFormWithoutRating :responseFilms="prevRespPremiers">
        </FilmsFormWithoutRating>

      </div>
    </div>

    <div class="flex flex-col">
      <div class="flex justify-start">
        <h1 class="header" @click="$router.push('/bestfilms')">Best of all time
          <urightarrow></urightarrow>
        </h1>
      </div>
      <div class="resSearchFiveFilms flex flex-wrap gap-7 items-center align-top">

        <FilmsFormWithoutRating :responseFilms="prevRespBest">
        </FilmsFormWithoutRating>

      </div>
    </div>
  </div>
</template>

<script>
import { fetchMainTop, isLoaded } from '../hooks/fetch.js'
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
      prevRespBest,
      isLoaded
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/Pages_styles/MainStyle.scss';
</style>