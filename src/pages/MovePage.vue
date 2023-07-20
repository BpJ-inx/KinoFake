<template>
    <spinner v-if="!isLoaded"></spinner>

    <FilmForm v-if="isLoaded" :responseMove='responseMove'>
    </FilmForm>
</template>

<script>
import FilmForm from '../components/FilmForm.vue'
import { fetchFilm } from '../urlConfig.js'
import { fetchMove, isLoaded } from '../hooks/fetch';
import axios from "axios";
import { checkIsFav, isFav } from '../hooks/favorite.js'

export default {
    components: {
        FilmForm
    },
    methods: {
        async refreshPage() {
            this.isLoaded = false
            try {
                let responseFromServer = await axios.get(fetchFilm + 'random',
                    {
                        headers: {
                            'accept': 'application/json',
                            'X-API-KEY': this.X_API_KEY,
                        }
                    }
                )
                this.responseMove = []
                this.responseMove.push(responseFromServer.data)
                localStorage.setItem('filmID', this.responseMove[0].id)
                localStorage.setItem('filmName', this.responseMove[0].name)


            }
            catch (e) {
                console.log(e)
            }
            this.isLoaded = true
        }


    },

    mounted() {
        document.querySelector('.butRandom ').addEventListener('click', this.refreshPage)
    },
    beforeUnmount() {
        document.querySelector('.butRandom ').removeEventListener('click', this.refreshPage)
        this.responseMove = []
    },
    setup() {
        const { responseMove, X_API_KEY, } = fetchMove()
        return {
            responseMove,
            X_API_KEY,
            checkIsFav,
            isFav,
            isLoaded
        }
    }

}
</script>

<style lang="scss" scoped></style>