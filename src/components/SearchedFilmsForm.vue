<template>
  <div class="filmCard flex flex-col  m-2 cursor-pointer items-center" @click="openFilmOnSelfPage()"
    v-for="film in responseSearchFilms" :key="film.id">
    <div class="idFilm hidden">{{ film.id }}</div>
    <div class="movie_rating">{{ film.rating.kp }}</div>
    <img class="posterFilm" :src='film.poster.url' @load="hideSpinnerShowFilmChangeColorRating">
    <div class="nameFilm text"> {{ film.name }}</div>

  </div>
</template>

<script>
import {openFilmOnSelfPage} from '../hooks/fetch.js'
export default {
  props: {
    responseSearchFilms: {
      type: Array,
      required: true
    }
  },
  methods: {
    hideSpinnerShowFilmChangeColorRating() {
      document.querySelector('.resSearchFiveFilms').classList.remove('hidden');
      document.querySelector('.resSearchFiveFilms').classList.add('flex');
      document.querySelector('.spinner').classList.add('hidden');

      for (let i = 0; i < document.querySelectorAll('.movie_rating').length; ++i) {

        if (document.querySelectorAll('.movie_rating')[i].innerText > 7.000) {
          document.querySelectorAll('.movie_rating')[i].classList.add('movie_rating_border_green')
        } else if (document.querySelectorAll('.movie_rating')[i].innerText > 5.000 || document.querySelector('.movie_rating').innerText < 7.000) {
          document.querySelectorAll('.movie_rating')[i].classList.add('movie_rating_border_orange')
        } else if (document.querySelectorAll('.movie_rating')[i].innerText <= 5.000) {
          document.querySelectorAll('.movie_rating')[i].classList.add('movie_rating_border_red')
        }
      }

    }

  },
  setup(props){
return{
  openFilmOnSelfPage
}

  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/SearchedFilmsFormStyle.scss';
</style>