<template>
    <h1 class="header">Результаты по вашему запросу :</h1>

    <spinner></spinner>

    <div class="resSearchFiveFilms hidden flex-wrap justify-center gap-7 items-center align-top">

        <SearchedFilmsForm 
        :responseSearchFilms="responseSearchFilms">
        </SearchedFilmsForm>

    </div>

    <div class="errorPlace hidden">
        <SearchError></SearchError>
    </div>
</template>

<script>
import SearchError from '../components/SearchError.vue';
import {fetchSearchName} from '../urlConfig.js'
import SearchedFilmsForm from '../components/SearchedFilmsForm.vue'
import { fetchSearch } from '../hooks/fetch';
import axios from "axios";

export default {
    components: {
        SearchedFilmsForm,
        SearchError,
    },
    methods: {
        async listenerFunction() {
            document.querySelector('.spinner').classList.remove('hidden')
            document.querySelector('.resSearchFiveFilms').classList.add('hidden')

            if (document.querySelector('.errorPlace')) {
                document.querySelector('.errorPlace').classList.add('hidden')
            }

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
                    document.querySelector('.spinner').classList.add('hidden')
                    document.querySelector('.resSearchFiveFilms').classList.add('hidden')
                    document.querySelector('.searchInput').value = ''
                    document.querySelector('.errorPlace').classList.remove('hidden')
                    document.querySelector('.textError').innerHTML = `Sorry, No results found for "${this.searchQuery}"`
                }
            }
            catch (e) {
                console.log(e)
            }
        }
    },
    mounted() {
        document.querySelector('.searchInputButton').addEventListener('click', this.listenerFunction)
    },
    beforeUnmount() {
        document.querySelector('.searchInputButton').removeEventListener('click', this.listenerFunction)
    },
    setup() {
        const { responseSearchFilms, X_API_KEY, searchQuery } = fetchSearch()

        return {
            responseSearchFilms,
            X_API_KEY,
            searchQuery
        }
    }

}
</script>


<style lang="scss" scoped>
@import '../assets/styles/Pages_styles/ResSearchPageStyle.scss';
</style>