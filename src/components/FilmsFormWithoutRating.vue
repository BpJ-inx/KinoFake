<template>
  <div class="filmCard flex flex-col  m-2 cursor-pointer items-center" @click="openFilmOnSelfPage()"
    v-for="film in responseFilms" 
    :key="film.kinopoiskId">

    <div class="idFilm hidden">{{ film.kinopoiskId }}</div>
    <img class="posterFilm " 
    :src="film.posterUrl" 
    @load="hideSpinnerShowFilmChangeColorRating" />
    <div class="nameFilm text ">{{ film.nameRu }}</div>

  </div>
</template>

<script>
import { openFilmOnSelfPage } from '../hooks/fetch';
export default {
  props: {
    responseFilms: {
      type: Array,
      required: true,
    },
  },
  methods: {
    hideSpinnerShowFilmChangeColorRating() {
      document.querySelector('.resSearchFiveFilms').classList.remove('hidden');
      document.querySelector('.resSearchFiveFilms').classList.add('flex');
      document.querySelector('.spinner').classList.add('hidden');
    },
  },
  setup(props) {
    return {
      openFilmOnSelfPage
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