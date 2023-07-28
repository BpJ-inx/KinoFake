<template >
    <div class="wrapper flex justify-between mt-36 w-full ">
        <div class="personal_page__user relative">
            <div class="personal_page__user__img">
                <IconProfile></IconProfile>
            </div>
            <div class="personal_page__user_name">
                {{ name }}
            </div>
        </div>


        <div class="personal_page__categorys flex flex-col">

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
                        <div class="empty_category__body">You can add film to your favorites on its page.
                        </div>
                    </div>
                </div>

            </div>

            <div class="reviews">
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
                        <div class="empty_category__header">Review list is empty.</div>
                        <div class="empty_category__body">You can write reviews on film pages.
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
import IconProfile from '../components/IconProfile.vue'
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
            anyReviews: false,

        }
    },
    components: {
        ByIdSearchedFilmsForm,
        ReviewFormPersonalPage,
        IconProfile
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

.personal_page__categorys {
    width: 100%;
}

.personal_page__user {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 10px;
}

.personal_page__user__img {
    display: flex;
    border-radius: 100%;
    border: solid 2px black;
    height: 300px;
    width: 300px;
}
</style>