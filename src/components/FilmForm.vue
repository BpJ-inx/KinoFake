<template >
    <div class="filmPage flex-col justify-center flex">
        <div class="aboutFilm h-auto" v-for="film in responseMove" :key="film.id">

            <div class="imgSide ">
                <img class="posterFilm" :src="film.poster.previewUrl" @load="changeRating">


                <div class="movie_rating"> {{ film.rating.kp.toFixed(1) }} </div>

                <div class="button_place flex flex-row gap-3 justify-center">
                    <button class="buttonOnKinoPoisk cursor-pointer" @click="openFilmOnKP">Open on КиноПоиске</button>
                    <button class="buttonFav cursor-pointer" v-if="isAuth" @click="addFavoriteFilm">
                        <ustaronbut></ustaronbut>
                    </button>
                </div>

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
            <utextarearev :sendFunction="addReview">
            </utextarearev>

            <div class="reviews__list flex flex-col w-full h-full">
                <ReviewForm :arrayReviews='arrayReviews'>
                </ReviewForm>
            </div>

        </div>

        <div class="reviews__pagination_place">
            <upaginationreviews :pages="pages"></upaginationreviews>
        </div>

    </div>
</template>

<script>
import { changeRating } from '../hooks/show';
import { isAuth } from '../hooks/authorization.js'
import { addFavoriteFilm, checkIsFav, isFav, chengeColorStarButIfFav } from '../hooks/favorite.js'
import { addReview, arrayReviews, pages, chengeArrayReview, page } from '../hooks/reviews.js'
import { isLoaded } from '../hooks/fetch.js'
import ReviewForm from './ReviewForm.vue';

export default {
    data() {
        return {
            colorStar: `#2c2b2f`
        }
    },
    methods: {

    },
    mounted() {
        chengeArrayReview()
        chengeColorStarButIfFav()
    },
    beforeUpdate() {
        checkIsFav()
        chengeColorStarButIfFav()
        chengeArrayReview()

    },
    unmounted() {
        page.value = 1
    },
    components: {
        ReviewForm,
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
            changeRating,
            isAuth,
            addFavoriteFilm,
            isFav,
            checkIsFav,
            addReview,
            arrayReviews,
            pages,
            isLoaded,
            chengeArrayReview,
            chengeColorStarButIfFav

        }
    },
    methods: {
        openFilmOnKP() {
            window.open(`https://www.kinopoisk.ru/film/` + document.querySelector(".idFilm").innerHTML);
        },
    },
    beforeUnmount() {
        document.querySelector('.reviews__list').innerHTML = ''
        this.arrayReviews = []
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/FilmFormStyle.scss';
</style>

