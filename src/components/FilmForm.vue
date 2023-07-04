<template >
    <div class="aboutFilm h-auto hidden" v-for="film in responseMove" :key="film.id">

        <div class="imgSide ">
            <img class="posterFilm" :src="film.poster.previewUrl" @load="showFilm">

            <div class="movie_rating"> {{ film.rating.kp.toFixed(1) }} </div>
            <button class="buttonFav cursor-pointer" v-if="isAutho">To favorites</button>
            <button class="buttonOnKinoPoisk cursor-pointer" @click="openFilmOnKP">Open on КиноПоиске</button>
        </div>

        <div class="descSide">
            <div class="idFilm hidden">{{ film.id }} </div>
            <div class="nameFilm ">{{ film.name }}</div>
            <div class="altNameFilm"> {{ film.alternativeName }}
            </div>

            <div class="otherInformation">
                <div class="countryText flex grayNameClass flex-row ">Country:
                    <div class="countryFilm whiteColorClass ml-2 ">{{ film.countries[0].name }}</div>
                </div>

                <div class="yearText flex grayNameClass flex-row ">Year:
                    <div class="yearFilm whiteColorClass ml-2">{{ film.year }}</div>
                </div>

                <div class="descriptText grayNameClass ">Description:</div>
                <div class="descFilm"> {{ film.description }}</div>
            </div>
        </div>

    </div>
</template>

<script>
import { showFilm } from '../hooks/show';
import { isAutho } from '../hooks/authorization.js'
export default {
    data() {
        return {
            
        }
    },
    props: {
        responseMove: {
            type: Array,
            required: true,
        }
    },
    setup() {

        return {
            showFilm,
            isAutho
        }
    },
    methods: {
        openFilmOnKP() {
            window.open(`https://www.kinopoisk.ru/film/` + document.querySelector(".idFilm").innerHTML);
        },
    },


}

</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/FilmFormStyle.scss';
</style>

