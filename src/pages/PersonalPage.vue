<template >
    <div class=' '>
        <h1 class="header">Personal page :</h1>
        <div class="wrapper flex justify-between mt-7">
            <div class="w-full">
                <div class="person__name ml-11">
                    Name : {{ name }}
                </div>
                <div class="reviews ml-11">
                    <div class="reviews__pagination_place">
                        <upaginationreviews :pages="pages">
                        </upaginationreviews>
                    </div>
                    Reviews :

                    <ReviewFormPersonalPage :arrayReviews="arrayReviews">
                    </ReviewFormPersonalPage>

                </div>
            </div>
            <div class="favorites w-full">
                <div>
                    <div class="ml-11">Favorites :</div>
                    <div class="favorites__place  flex flex-wrap   align-top">
                        <ByIdSearchedFilmsForm :responseFavFilms="responseFavFilms">
                        </ByIdSearchedFilmsForm>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { fetchFavFilms, fetchRev } from '../hooks/fetch.js'
import ByIdSearchedFilmsForm from '../components/ByIdSearchedFilmsForm.vue'
import ReviewFormPersonalPage from '../components/ReviewFormPersonalPage.vue';
import { arrayReviews, fiveRev, page, pages } from '../hooks/reviews.js'

export default {
    data() {
        return {
            name: localStorage.getItem('logNAME'),
            arrayReviews: arrayReviews
        }
    },
    components: {
        ByIdSearchedFilmsForm,
        ReviewFormPersonalPage
    },
    beforeUpdate() {
        if (Math.ceil(this.arrayReviews.length / 5) == 1) {
            this.pages = 0
        } else {
            this.pages = Math.ceil(this.arrayReviews.length / 5)
        }
    },

    beforeMount() {
        this.arrayReviews = this.responseReviews
        if (Math.ceil(this.arrayReviews.length / 5) == 1) {
            this.pages = 0
        } else {
            this.pages = Math.ceil(this.arrayReviews.length / 5)
        }


    },
    setup() {
        const { responseFavFilms } = fetchFavFilms()
        const { responseReviews } = fetchRev()

        return {
            responseFavFilms,
            responseReviews,
            arrayReviews,
            fiveRev,
            pages,
            page,

        }
    }
};
</script>
  
<style lang="scss" scoped>
@import '../assets/styles/Pages_styles/PersonalStyle.scss';
</style>