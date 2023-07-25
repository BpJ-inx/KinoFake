<template>
  <div class="filmCard hover:shadow-gray-700 hover:shadow-2xl flex flex-col  m-2 cursor-pointer items-center"
    @click="openFilmOnSelfPage()" v-for="film in responseFilms" :key="film.kinopoiskId">

    <div class="idFilm hidden">{{ film.kinopoiskId }} {{ film.filmId }}</div>

    <div class="fav__star" v-show="checkFavOnlyPoster(film.kinopoiskId, film.filmId)">
      <ustaroncard></ustaroncard>
    </div>

    <img class="posterFilm" :src="film.posterUrl" />
    <div class="nameFilm text ">{{ film.nameRu }}</div>

  </div>
</template>

<script>
import { openFilmOnSelfPage } from '../hooks/fetch';
import { checkFavOnlyPoster } from '../hooks/favorite';

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
      checkFavOnlyPoster,
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/Components_styles/SearchedFilmsFormStyle.scss";

.posterFilm {
  margin-top: 0px;
}

.fav__star {
  display: flex;
  align-self: flex-end;
  align-items: center;
  user-select: none;
  position: absolute;
  margin-top: 15px;
  margin-right: 15px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #000000c4;
  border: solid 2px red;
  color: #ffffff;
  font-size: 14px;
  z-index: 1;
  order: 0;
}
</style>