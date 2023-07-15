<template>
    <div class="pages" v-for="favPage in favPages" :key="favPage">
        <ubutton class="page text-white" @click="toPage(favPage)">{{ favPage }} </ubutton>
    </div>
</template>

<script>
import { toPage } from '../../../hooks/favorite.js'

export default {

    name: 'upaginationfavorites',
    props: {
        favPages: {
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