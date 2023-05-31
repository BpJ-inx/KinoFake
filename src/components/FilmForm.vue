<template >
    <div class="aboutFilm h-auto hidden" 
    v-for="film in responseMove" 
    :key="film.id">

        <div class="imgSide ">
            <img class="posterFilm" 
            :src="film.poster.previewUrl" 
            @load="hideSpinnerShowFilmChangeColorRating">

            <div class="movie_rating"> {{ film.rating.kp.toFixed(1) }} </div>
            <button class="buttonOnKinoPoisk cursor-pointer" @click="openFilmOnKP">Открыть на КиноПоиске</button>
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

export default {
    props: {
        responseMove: {
            type: Array,
            required: true,
        }
    },
    methods: {
        openFilmOnKP() {
            window.open(`https://www.kinopoisk.ru/film/` + document.querySelector(".idFilm").innerHTML);
        },

        hideSpinnerShowFilmChangeColorRating() {
            document.querySelector('.aboutFilm').classList.remove('hidden');
            document.querySelector('.aboutFilm').classList.add('flex');
            document.querySelector('.spinner').classList.add('hidden');

            document.querySelector('.movie_rating').classList.remove('movie_rating_border_green', 'movie_rating_border_orange', 'movie_rating_border_red')
            if (document.querySelector('.movie_rating').innerText > 7.000) {
                document.querySelector('.movie_rating').classList.add('movie_rating_border_green')
            } else if (document.querySelectorAll('.movie_rating').innerText > 5.000 || document.querySelector('.movie_rating').innerText < 7.000) {
                document.querySelector('.movie_rating').classList.add('movie_rating_border_orange')
            } else if (document.querySelector('.movie_rating').innerText <= 5.000) {
                document.querySelector('.movie_rating').classList.add('movie_rating_border_red')
            }
            if (document.querySelector('.movie_rating').innerText == 0) {
                document.querySelector('.movie_rating').innerText = '-'
            }
        },
    },


}

</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/FilmFormStyle.scss';
</style>

