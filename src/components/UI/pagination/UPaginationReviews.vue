<template>
    <div class="pages" v-for="page in pages" :key="page">
        <ubutton class="page text-white" @click="toPage(page)">{{ page }} </ubutton>
    </div>
</template>

<script>
import { toPage } from '../../../hooks/reviews.js'

export default {
    name: 'upaginationreviews',
    props: {
        pages: {
            type: Number
        }

    },
    methods: {
    },
    setup() {
        return {
            toPage
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/UI_styles/UPaginationStyle.scss';
</style>