<template>
    <div class="reviews__place" v-for="review in responseReviews" :key="review.ID">
        <div class="review">
            <div class="review__header">
                <div class="review__header__name_film">"{{ review.FilmName }}"</div>
                <button class="review__header__button_remove">X</button>
            </div>
            <div class="review__description">{{ review.Description }}</div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        responseReviews: {
            type: Array,
            required: true,
        },
    },

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/ReviewFromPersonalPageStyle.scss';
</style>