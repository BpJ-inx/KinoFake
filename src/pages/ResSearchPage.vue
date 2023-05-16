<template>
    <div class="header">Результаты по вашему запросу:</div>

    <spinner></spinner>

    <div class="resSearchFiveFilms hidden flex-wrap justify-center gap-3 items-center align-top">

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

            let searchQuery = document.querySelector('.searchInput').value
            document.querySelector('.searchInput').value = ''
            document.querySelector('.searchInput').blur()
            let fetchRequest =
                `https://api.kinopoisk.dev/v1/movie?selectFields=rating.kp%20name%20year%20alternativeName%20poster.url%20countries.name%20description%20id&page=1&name=${searchQuery}`
            let X_API_KEY = '9A3NPT8-DRV4AHY-QG3HFAE-2GHT683'

            try {
                let responseFromServer = await axios.get(fetchRequest,
                    {
                        headers: {
                            'accept': 'application/json',
                            'X-API-KEY': X_API_KEY
                        }
                    }
                )

                if (responseFromServer.data.docs.length != 0) {
                    this.responseSearchFilms = []
                    this.responseSearchFilms = responseFromServer.data.docs

                    for (let i = 0; i < this.responseSearchFilms.length; ++i) {
                        if (!this.responseSearchFilms[i].poster) {
                            this.responseSearchFilms[i].poster = {}
                            this.responseSearchFilms[i].poster.url = 'src/assets/img/nonPoster.png'
                        }
                    }
                } else {
                    document.querySelector('.spinner').classList.add('hidden')
                    document.querySelector('.searchInput').value = ''
                    document.querySelector('.errorPlace').classList.remove('hidden')
                    document.querySelector('.textError').innerHTML = `Sorry, No results found for "${searchQuery}"`
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
    beforeMount() {
        document.querySelector('.searchInputButton').removeEventListener('click', this.listenerFunction)
    },

    setup(props) {
        const { responseSearchFilms } = fetchSearch()


        return {
            responseSearchFilms
        }
    }

}
</script>


<style lang="scss" scoped>
@import '../assets/styles/Pages_styles/ResSearchPageStyle.scss';
</style>