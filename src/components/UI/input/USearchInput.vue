<template>
    <div class="flex items-center ">

        <form @submit.prevent>

            <div class="flex">
                <div class="relative w-full   ">

                    <div class="absolute   inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd">
                            </path>
                        </svg>
                    </div>

                    <input v-model="searchQuery" @keyup.enter="$router.push('/ressearch')" type="search" class="searchInput text-sm rounded-lg  block w-full pl-10 p-2.5
             dark:bg-gray-700  dark:placeholder-gray-400 pr-20 px-20" placeholder="Search">

                    <button class="searchInputButton   absolute top-0 right-0 p-2.5 text-sm font-medium
                    text-gray-300 bg-black rounded-r-lg 
                 transition duration-500 hover:bg-black
                 dark:hover:bg-gray-700" @click="$router.push('/ressearch')">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
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