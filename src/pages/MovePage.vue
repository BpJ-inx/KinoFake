<template>
    <div>
        <spinner></spinner>

        <FilmForm 
        :responseMove='responseMove'>
        </FilmForm>

    </div>
</template>

<script>
import FilmForm from '../components/FilmForm.vue'
import { fetchFilm } from '../urlConfig.js'
import { fetchMove } from '../hooks/fetch';
import axios from "axios";
import { checkIsFav , isFav } from '../hooks/favorite.js'

export default {
    components: {
        FilmForm
    },
    methods: {
        async refreshPage() {

            if (document.querySelector('.aboutFilm').classList.contains('flex')) {
                document.querySelector('.aboutFilm').classList.remove('flex');
                document.querySelector('.aboutFilm').classList.add('hidden');
                document.querySelector('.spinner').classList.remove('hidden');
            }

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
                localStorage.setItem('filmID', responseFromServer.data.id)
                
            }
            catch (e) {
                console.log(e)
            }

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
            isFav
        }
    }

}
</script>

<style lang="scss" scoped>
</style>