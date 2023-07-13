<template>
    <div class="oneRev" v-for="(oneRev, index) in arrayReviews" :key="oneRev.ID">
        <div class="reviews__header">
            <div class="name_user">{{ oneRev.Name }}</div>
            <div class="rev__id_film hidden">{{ oneRev.ID }}</div>
            <div class="remove_rev cursor-pointer" v-if="ifRemove(oneRev.Name)"
                @click="removeReview(index, arrayReviews, oneRev)">remove</div>
        </div>
        <div class="text_rev flex w-full ">
            {{ oneRev.Description }}
        </div>
    </div>
</template>

<script>
import { removeReview } from '../hooks/reviews.js'
export default {
    name: 'reviewform',
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
    setup(){
        return{
            removeReview
        }
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/ReviewFormStyle.scss';
</style>