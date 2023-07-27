<template >
    <div class='mt-24 w-full'>
        <div class="wrapper flex justify-between mt-7">

            <div class="person__name w-full">
                Name : {{ name }}
            </div>

            <div class="flex flex-col self-start w-full">

                <div class="favorites">

                    <div class="personal_page__category_name ">Favorites films
                    </div>

                    <div v-if="anyFavorites">
                        <spinner v-if="!isLoaded"></spinner>

                        <div class="personal_page__content" v-if="isLoaded">
                            <div class="pagination_place">
                                <upaginationfavorites :favPages="favPages">
                                </upaginationfavorites>
                            </div>

                            <div class="favorites__place   flex flex-wrap   align-top">
                                <ByIdSearchedFilmsForm :responseFavFilms="responseFavFilms">
                                </ByIdSearchedFilmsForm>

                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center m-auto" v-else>
                        <div class="empty_category  flex-col">
                            <div class="empty_category__header">There are no favorites films.</div>
                            <div class="empty_category__body">By going to the page with the film, you can add it to your
                                favorites.</div>
                        </div>
                    </div>

                </div>

                <div class="reviews w-full">
                    <div class="personal_page__category_name ">Film reviews</div>
                    <div class="personal_page__content" v-if="anyReviews">
                        <div class="pagination_place">
                            <upaginationreviews :pages="pages">
                            </upaginationreviews>
                        </div>


                        <ReviewFormPersonalPage :arrayReviews="arrayReviews">
                        </ReviewFormPersonalPage>
                    </div>
                    <div class="flex justify-center m-auto" v-else>
                        <div class="empty_category  flex-col">
                            <div class="empty_category__header">Review list is empty</div>
                            <div class="empty_category__body">You can leave reviews on film pages
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { fetchFavFilms, fetchRev, isLoaded } from '../hooks/fetch.js'
import ByIdSearchedFilmsForm from '../components/ByIdSearchedFilmsForm.vue'
import ReviewFormPersonalPage from '../components/ReviewFormPersonalPage.vue';
import { arrayReviews, fiveRev, page, pages } from '../hooks/reviews.js'
import { IdFilmsArray, favPage, favPages } from '../hooks/favorite.js'
import { isAuth } from '../hooks/authorization';
import router from '../router/router'

export default {
    data() {
        return {
            name: localStorage.getItem('logNAME'),
            arrayReviews: arrayReviews,
            anyFavorites: false,
            anyReviews: false
        }
    },
    components: {
        ByIdSearchedFilmsForm,
        ReviewFormPersonalPage
    },
    beforeUpdate() {

        this.pagintion()
        this.checkFavFilmsExist()
        this.checkRevFilmsExist()
    },
    beforeMount() {

        if (isAuth.value) {
                this.arrayReviews = this.responseReviews
        this.pagintion()
        }
        this.checkFavFilmsExist()
        this.checkRevFilmsExist()
    },
    methods: {
        checkFavFilmsExist() {
            if (JSON.parse(localStorage.getItem(`favorite.${this.name}`)) != 0) {
                this.anyFavorites = true
            } else {
                this.anyFavorites = false
            }
        },
        checkRevFilmsExist() {
            if (this.arrayReviews.length > 0) {
                this.anyReviews = true
            } else {
                this.anyReviews = false
            }
        },
        pagintion() {

            if (Math.ceil(this.arrayReviews.length / 5) == 1) {
                this.pages = 0

            } else {
                this.pages = Math.ceil(this.arrayReviews.length / 5)
            }

            if (Math.ceil(this.IdFilmsArray.length / 3) == 1) {
                this.favPages = 0

            } else {
                this.favPages = Math.ceil(this.IdFilmsArray.length / 3)

            }
        }

    },

    setup() {
        if (!isAuth.value) {
            router.replace('/')
        } else {
            const { responseFavFilms } = fetchFavFilms()
            const { responseReviews } = fetchRev()
            return {
                responseFavFilms,
                responseReviews,
                arrayReviews,
                fiveRev,
                pages,
                page,
                IdFilmsArray,
                favPage,
                favPages,
                isLoaded,
                isAuth

            }
        }
    }
};
</script>
  
<style lang="scss" scoped>
@import '../assets/styles/Pages_styles/PersonalStyle.scss';

.empty_category {
    display: flex;
    width: 500px;
    background-color: rgb(67, 67, 67);
    border: solid 1px white;
    border-radius: 0.75rem;
    padding: 20px;
    box-shadow: inset 0 2px 10px 1px rgba(0, 0, 0, .3), inset 0 0 0 60px rgba(0, 0, 0, .3), 0 1px rgba(255, 255, 255, .08);
}

.empty_category__header {
    font-family: Tahoma, Arial, Verdana, sans-serif;
    font-size: 25px;
    color: rgb(227, 227, 227);
}

.empty_category__body {
    font-family: Tahoma, Arial, Verdana, sans-serif;
    font-size: 15px;
    color: rgb(151, 151, 151);
}
</style>