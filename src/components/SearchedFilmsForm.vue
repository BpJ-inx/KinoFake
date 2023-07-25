<template>
  <div class="filmCard hover:shadow-gray-700 hover:shadow-2xl flex flex-col  m-2 cursor-pointer items-center"
    @click="openFilmOnSelfPage()" v-for="film in responseSearchFilms" :key="film.id">

    <div class="idFilm hidden">{{ film.id }}</div>
    <div class="movie_rating">{{ film.rating.kp.toFixed(1) }}</div>

    <div class="fav__star" v-show="checkFavOnlyPoster(film.id)">
      <ustaroncard></ustaroncard>
    </div>

    <img class="posterFilm" :src='film.poster.url' @load="changeRating">
    <div class="nameFilm text"> {{ film.name }}</div>

  </div>
</template>

<script>
import { openFilmOnSelfPage } from '../hooks/fetch.js'
import { changeRating } from '../hooks/show.js'
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
      changeRating,
      checkFavOnlyPoster,
    }

  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/SearchedFilmsFormStyle.scss';
</style>