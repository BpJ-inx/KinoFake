<template>
    <h1 class="header">Results for your request :</h1>

    <div v-if="!isErrorSearch">
        <spinner v-if="!isLoaded"></spinner>


        <div v-if="isLoaded" class="resSearchFiveFilms flex flex-wrap justify-center gap-7 items-center align-top">

            <SearchedFilmsForm :responseSearchFilms="responseSearchFilms">
            </SearchedFilmsForm>

        </div>
    </div>

    <div v-if="isErrorSearch" class="errorPlace">
        <SearchError></SearchError>
    </div>
</template>

<script>
import SearchError from '../components/SearchError.vue';
import { fetchSearchName } from '../urlConfig.js'
import SearchedFilmsForm from '../components/SearchedFilmsForm.vue'
import { fetchSearch, isLoaded, isErrorSearch, textError } from '../hooks/fetch';
import axios from "axios";

export default {
    components: {
        SearchedFilmsForm,
        SearchError,
    },
    methods: {
        async listenerFunction() {
            this.isLoaded = false

            this.isErrorSearch = false

            this.searchQuery = document.querySelector('.searchInput').value
            document.querySelector('.searchInput').value = ''
            document.querySelector('.searchInput').blur()

            try {
                let responseFromServer = await axios.get(fetchSearchName + this.searchQuery,
                    {
                        headers: {
                            'accept': 'application/json',
                            'X-API-KEY': this.X_API_KEY
                        }
                    })
                if (responseFromServer.data.docs.length != 0) {

                    this.responseSearchFilms = responseFromServer.data.docs

                    for (let i = 0; i < this.responseSearchFilms.length; ++i) {
                        if (!this.responseSearchFilms[i].poster) {
                            this.responseSearchFilms[i].poster = {}
                            this.responseSearchFilms[i].poster.url = 'src/assets/img/nonPoster.png'
                        }
                    }
                } else {
                    isErrorSearch.value = true
                    document.querySelector('.searchInput').value = ''
                    this.textError = `Sorry, No results found for "${this.searchQuery}"`
                }

            }
            catch (e) {
                console.log(e)
            }
            this.isLoaded = true
        }
    },
    mounted() {
        document.querySelector('.searchInputButton').addEventListener('click', this.listenerFunction)
    },
    beforeUnmount() {
        document.querySelector('.searchInputButton').removeEventListener('click', this.listenerFunction)
        this.isErrorSearch = false
    },
    setup() {
        const { responseSearchFilms, X_API_KEY, searchQuery } = fetchSearch()

        return {
            responseSearchFilms,
            X_API_KEY,
            searchQuery,
            isLoaded,
            isErrorSearch,
            textError
        }
    }

}
</script>


<style lang="scss" scoped>
@import '../assets/styles/Pages_styles/ResSearchPageStyle.scss';
</style>