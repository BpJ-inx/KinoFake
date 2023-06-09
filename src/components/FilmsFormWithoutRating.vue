<template>
  <div class="filmCard flex flex-col  m-2 cursor-pointer items-center" @click="openFilmOnSelfPage()"
    v-for="film in responseFilms" 
    :key="film.kinopoiskId">

    <div class="idFilm hidden">{{ film.kinopoiskId }} {{ film.filmId }}</div>
    <img class="posterFilm " 
    :src="film.posterUrl" 
    @load="showFilm" />
    <div class="nameFilm text ">{{ film.nameRu }}</div>

  </div>
</template>

<script>
import { openFilmOnSelfPage } from '../hooks/fetch';
import { showFilm } from '../hooks/show';
export default {
  props: {
    responseFilms: {
      type: Array,
      required: true,
    },
  },
  methods: {
  },
  setup() {
    return {
      openFilmOnSelfPage,
      showFilm
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/Components_styles/SearchedFilmsFormStyle.scss";

.posterFilm {
  margin-top: 0px;
}
</style>