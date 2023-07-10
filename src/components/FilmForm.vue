<template >
    <div class="filmPage flex-col justify-center hidden">
    <div class="aboutFilm h-auto " v-for="film in responseMove" :key="film.id">

        <div class="imgSide ">
            <img class="posterFilm" :src="film.poster.previewUrl" @load="showFilm">


            <div class="movie_rating"> {{ film.rating.kp.toFixed(1) }} </div>
            <div class="fav__star" v-show="isFav">
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

            <button class="buttonFav cursor-pointer" v-if="isAutho" @click="addFavoriteFilm"> {{ nameFavBut }}</button>
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
    <div class="reviews">
        <utextarearev></utextarearev>
    </div>
</div>
</template>

<script>
import { showFilm } from '../hooks/show';
import { isAutho } from '../hooks/authorization.js'
import { addFavoriteFilm, checkIsFav, isFav, nameFavBut } from '../hooks/favorite.js'


export default {
    data() {
        return {

        }
    },
    beforeUpdate() {
        checkIsFav()
        if (isFav == false) {
            this.isFav = false
            this.nameFavBut = 'To favorites'
        }

    },
    props: {
        responseMove: {
            type: Array,
            required: true,
        },
    },
    setup() {
        checkIsFav()
        return {
            showFilm,
            isAutho,
            addFavoriteFilm,
            isFav,
            checkIsFav,
            nameFavBut,

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

