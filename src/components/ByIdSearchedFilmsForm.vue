<template>
  <div class="filmCard hover:shadow-gray-700 hover:shadow-2xl flex flex-col  m-2 cursor-pointer items-center"
    @click="openFilmOnSelfPage()" v-for="favFilm in responseFavFilms" :key="favFilm.kinopoiskId">

    <div class="idFilm hidden">{{ favFilm.kinopoiskId }}</div>
    <button class="button__del_fav" @click="deleteFromFav">
      <ucrossoncard></ucrossoncard>
    </button>

    <div class="fav__star" v-show="checkFavOnlyPoster(favFilm.kinopoiskId)">
      <ustaroncard></ustaroncard>
    </div>

    <img class="posterFilm" :src='favFilm.posterUrl'>
    <div class="nameFilm text"> {{ favFilm.nameRu }}</div>

  </div>
</template>

<script>
import { openFilmOnSelfPage } from '../hooks/fetch.js'
import { checkFavOnlyPoster, deleteFromFav } from '../hooks/favorite';

export default {
  props: {
    responseFavFilms: {
      type: Array,
      required: true
    }
  },

  setup() {
    return {
      openFilmOnSelfPage,
      checkFavOnlyPoster,
      deleteFromFav,
    }

  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/ByIdSearchedFilmsFormStyle.scss';
</style>