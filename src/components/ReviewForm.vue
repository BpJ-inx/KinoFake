<template>
    <div class="oneRev" v-for="oneRev in arrayReviews" :key="oneRev.ID">
        <div class="reviews__header">
            <div class="name_user">{{ oneRev.Name }}</div>
            <div class="rev__id_film hidden">{{ oneRev.ID }}</div>
            <div class="remove_rev cursor-pointer">remove</div>
        </div>
        <div class="text_rev flex w-full ">
            {{ oneRev.Description }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'reviewform',
    props: {
        arrayReviews: {
            type: Array,
            required: true,
        },
    },

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/ReviewFormStyle.scss';
</style>