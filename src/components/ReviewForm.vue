<template>
    <transition-group name="reviews-list">
        <div class="oneRev" v-for="(oneRev, index) in fiveRev" :key="oneRev.ID">
            <div class="reviews__header">
                <div class="name_user">{{ oneRev.Name }}</div>
                <div class="rev__id_film hidden">{{ oneRev.ID }}</div>
                <uremoverevbut class="remove_rev cursor-pointer select-none" v-if="ifRemove(oneRev.Name)"
                    @click="removeReview(index, arrayReviews, oneRev)">
                    <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="2.5" transform="translate(5 5)">
                            <path d="m10.5 10.5-10-10z" />
                            <path d="m10.5.5-10 10" />
                        </g>
                    </svg>
                </uremoverevbut>
            </div>
            <div class="text_rev flex w-full ">
                {{ oneRev.Description }}
            </div>
        </div>
    </transition-group>
</template>

<script>
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
    methods: {
        ifRemove(name) {
            if (localStorage.getItem('logNAME')) {
                if (name == localStorage.getItem('logNAME')) {
                    return true
                } else {
                    return false
                }
            } else if (name == localStorage.getItem('guestID')) {
                return true
            }
            return false
        },

    },
    beforeUpdate() {
        if (this.page == 1) {
            this.fiveRev = this.arrayReviews.slice(0, 5)
        }
    },
    setup() {
        return {
            removeReview,
            fiveRev,
            page
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/ReviewFormStyle.scss';
</style>