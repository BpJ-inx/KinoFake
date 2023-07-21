<template>
    <transition-group name="reviews-list">
        <div class="reviews__place" v-for="(review, index) in fiveRev" :key="review.reviewID">
            <div class="review">
                <div class="review__header">
                    <a class="review__header__name_film" @click="openFilmOnSelfPage(review.ID)">"{{ review.FilmName }}"</a>
                    <div class="hidden idFilm">{{ review.ID }}</div>
                    <uremoverevbut class="review__header__button_remove" @click="removeReview(index, arrayReviews, review)">
                        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2.5" transform="translate(5 5)">
                                <path d="m10.5 10.5-10-10z" />
                                <path d="m10.5.5-10 10" />
                            </g>
                        </svg>
                    </uremoverevbut>
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
    components: { TransitionGroup },
    props: {
        arrayReviews: {
            type: Array,
            required: true,
        },
    },
    beforeMount() {
        this.arrayReviews.reverse()
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