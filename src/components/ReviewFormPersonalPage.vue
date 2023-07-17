<template>
    <transition-group name="reviews-list">
        <div class="reviews__place" v-for="(review, index) in fiveRev" :key="review.ID">
            <div class="review">
                <div class="review__header">
                    <a class="review__header__name_film" @click="openFilmOnSelfPage(review.ID)">"{{ review.FilmName }}"</a>
                    <div class="hidden idFilm">{{ review.ID }}</div>
                    <button class="review__header__button_remove"
                        @click="removeReview(index, arrayReviews, review)">X</button>
                </div>
                <div class="review__description">{{ review.Description }}</div>
            </div>
        </div>
    </transition-group>
</template>

<script>
import { openFilmOnSelfPage } from '../hooks/fetch.js';
import { removeReview, fiveRev, page } from '../hooks/reviews.js'
import { TransitionGroup } from 'vue';

export default {
    components:{ TransitionGroup },
    props: {
        arrayReviews: {
            type: Array,
            required: true,
        },
    },
    beforeMount() {

        if (this.page == 1) {
            this.fiveRev = this.arrayReviews.slice(0, 5)
        }
    },
    beforeUpdate() {
        if (this.page == 1) {
            this.fiveRev = this.arrayReviews.slice(0, 5)
        }
    },
    setup() {
        return {
            openFilmOnSelfPage,
            removeReview,
            fiveRev,
            page,
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/ReviewFromPersonalPageStyle.scss';
</style>