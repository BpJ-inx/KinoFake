<template>
    <TransitionGroup name="reviews-list">
        <div class="oneRev" v-for="(oneRev, index) in fiveRev" :key="oneRev.reviewID">
            <div class="reviews__header">
                <div class="name_user">{{ oneRev.Name }}</div>
                <div class="rev__id_film hidden">{{ oneRev.ID }}</div>
                <uremoverevbut class="remove_rev cursor-pointer select-none" v-if="ifRemove(oneRev.Name)"
                    @click="removeReview(index, arrayReviews, oneRev)">
                    <ucrossonbut></ucrossonbut>
                </uremoverevbut>
            </div>
            <div class="text_rev flex w-full ">
                {{ oneRev.Description }}
            </div>
        </div>
    </TransitionGroup>
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
    mounted(){
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