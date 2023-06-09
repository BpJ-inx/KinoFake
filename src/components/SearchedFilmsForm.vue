<template>
  <div class="filmCard flex flex-col  m-2 cursor-pointer items-center" @click="openFilmOnSelfPage()"
    v-for="film in responseSearchFilms" :key="film.id">

    <div class="idFilm hidden">{{ film.id }}</div>
    <div class="movie_rating">{{ film.rating.kp.toFixed(1) }}</div>
    <img class="posterFilm" :src='film.poster.url' @load="showSearchedFilms">
    <div class="nameFilm text"> {{ film.name }}</div>

  </div>
</template>

<script>
import { openFilmOnSelfPage } from '../hooks/fetch.js'
import { showSearchedFilms } from '../hooks/change'
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
      showSearchedFilms
    }

  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/SearchedFilmsFormStyle.scss';
</style>