<template>
    <div class="reviews__place" v-for="review in responseReviews" :key="review.ID">
        <div class="review">
            <div class="review__header">
                <a class="review__header__name_film" @click="openFilmOnSelfPage(review.ID)">"{{ review.FilmName }}"</a>
                <div class="hidden idFilm">{{ review.ID }}</div>
                <button class="review__header__button_remove"
                    @click="removeReview(index, responseReviews, review)">X</button>
            </div>
            <div class="review__description">{{ review.Description }}</div>
        </div>
    </div>
</template>

<script>
import { openFilmOnSelfPage } from '../hooks/fetch.js';
import { removeReview } from '../hooks/reviews.js'

export default {
    props: {
        responseReviews: {
            type: Array,
            required: true,
        },
    },
    setup() {
        return {
            openFilmOnSelfPage,
            removeReview
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/ReviewFromPersonalPageStyle.scss';
</style>