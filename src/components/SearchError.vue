<template>
    <div class="divWithError">
        <div class=" w-full px-16  flex items-center justify-center">
            <div
                class="error  border  flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                <p class="text-2xl text-center lg:text-5xl font-bold tracking-wider  mt-4">No Search Result</p>
                <p class="textError  mt-4 pb-4 border-b-2 text-center">{{ textError }}</p>

            </div>
        </div>
    </div>
</template>

<script>
import { textError } from '../hooks/fetch.js'

export default {
    name: 'searcherror',
    setup() {
        return {
            textError
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/SearchErrorStyle.scss';
</style>