<template>
  <div class="filmCard flex flex-col  m-2 cursor-pointer items-center" @click="openFilmOnSelfPage()"
    v-for="film in responseSearchFilms" :key="film.id">

    <div class="idFilm hidden">{{ film.id }}</div>
    <div class="movie_rating">{{ film.rating.kp.toFixed(1) }}</div>

    <div class="fav__star" v-show="checkFavOnlyPoster(film.id)">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="50.000000pt" height="75.000000pt"
        viewBox="-190 290 1000.000000 100.000000" preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,599.000000) scale(0.100000,-0.100000)" fill="red" stroke="red"
          stroke-width="100">
          <path d="M2775 4835 l-369 -1135 -1198 -2 -1198 -3 970 -704 c533 -388 968
                        -707 966 -710 -10 -17 -736 -2264 -733 -2267 2 -2 435 309 963 693 527 383
                        966 697 974 697 8 0 447 -314 974 -697 528 -384 961 -695 963 -693 3 3 -723
                        2250 -733 2267 -2 3 433 322 966 710 l970 704 -1198 3 -1198 2 -369 1135
                        c-203 624 -371 1135 -375 1135 -4 0 -173 -511 -375 -1135z" />
        </g>
      </svg>
    </div>

    <img class="posterFilm" :src='film.poster.url' @load="showSearchedFilms">
    <div class="nameFilm text"> {{ film.name }}</div>

  </div>
</template>

<script>
import { openFilmOnSelfPage } from '../hooks/fetch.js'
import { showSearchedFilms } from '../hooks/show.js'
import { checkFavOnlyPoster } from '../hooks/favorite';

export default {
  props: {
    responseSearchFilms: {
      type: Array,
      required: true
    }
  },

  setup() {
    return {
      openFilmOnSelfPage,
      showSearchedFilms,
      checkFavOnlyPoster,
    }

  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/SearchedFilmsFormStyle.scss';
</style>