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
import { fetchMove } from '../hooks/fetch';
import axios from "axios";

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
                let responseFromServer = await axios.get(`https://api.kinopoisk.dev/v1/movie/random`,
                    {
                        headers: {
                            'accept': 'application/json',
                            'X-API-KEY': '9A3NPT8-DRV4AHY-QG3HFAE-2GHT683'
                        }
                    }
                )
                this.responseMove = []
                this.responseMove.push(responseFromServer.data)
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
    setup(props) {
        const { responseMove } = fetchMove()
        return {
            responseMove
        }
    }

}
</script>

<style lang="scss" scoped></style>