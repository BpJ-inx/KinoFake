<template>
    <div class="flex items-center ">

        <form @submit.prevent>

            <div class="flex">
                <div class="relative w-full   ">

                    <div class="absolute   inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <uloupe></uloupe>
                    </div>

                    <input v-model="searchQuery" @keyup.enter="$router.push('/ressearch')" type="search" class="searchInput text-sm rounded-lg  block w-full pl-10 p-2.5
             dark:bg-gray-700  dark:placeholder-gray-400 pr-20 px-20" placeholder="Search">

                    <button class="searchInputButton   absolute top-0 right-0 p-2.5 text-sm font-medium
                    text-gray-300 bg-black rounded-r-lg 
                 transition duration-500 hover:bg-black
                 dark:hover:bg-gray-700" @click="$router.push('/ressearch')">
                        <uloupeonbut></uloupeonbut>
                    </button>

                </div>
            </div>

        </form>

    </div>
</template>

<script>
import fetch from '../../../hooks/fetch';
export default {
    name: 'usearchinputapi',
    setup() {
        const { searchQuery } = fetch
        return {
            searchQuery
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/UI_styles/USearchInputStyle.scss';
</style>