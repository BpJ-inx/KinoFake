<template>
    <div class="oneRev" v-for="(oneRev, index) in arrayReviews" :key="oneRev.ID">
        <div class="reviews__header">
            <div class="name_user">{{ oneRev.Name }}</div>
            <div class="rev__id_film hidden">{{ oneRev.ID }}</div>
            <div class="remove_rev cursor-pointer" v-if="ifRemove(oneRev.Name)"
                @click="removeReview(index, arrayReviews, oneRev, key)">remove</div>
        </div>
        <div class="text_rev flex w-full ">
            {{ oneRev.Description }}
        </div>
    </div>
</template>

<script>
// import { removeReview } from '../hooks/reviews.js'
export default {
    name: 'reviewform',
    props: {
        arrayReviews: {
            type: Array,
            required: true,
        },
    },
    methods: {
        ifRemove(name) {
            if (localStorage.getItem('logNAME')) {
                if (name == localStorage.getItem('logNAME')) {
                    return true
                } else {
                    return false
                }
            } else if (name == localStorage.getItem('guestID')) {
                return true
            }
            return false
        },
        removeReview(index, arrayReviews, oneRev, key) {

            let arrayUserRev = JSON.parse(localStorage.getItem(`reviews.${arrayReviews[index].Name}`))

            for (let i = 0; i < arrayUserRev.length; ++i) {
               if(JSON.parse(localStorage.getItem(`Rev.${arrayUserRev[i]}`)).Description == oneRev.Description){
                localStorage.removeItem(`Rev.${arrayUserRev[i]}`)

               let indexRemoveFromUserArray = JSON.parse(localStorage.getItem(`reviews.${oneRev.Name}`)).indexOf(arrayUserRev[i])
               let userArrayAfterRemove = JSON.parse(localStorage.getItem(`reviews.${oneRev.Name}`))
               userArrayAfterRemove.splice(indexRemoveFromUserArray, 1)
               localStorage.setItem(`reviews.${oneRev.Name}`,JSON.stringify(userArrayAfterRemove))
               localStorage.setItem('lengthRev',+localStorage.getItem('lengthRev')-1)
               let indexRemoveFromFilmArray = JSON.parse(localStorage.getItem(`reviewsFilm${oneRev.ID}`)).indexOf(arrayUserRev[i])
               let FilmArrayAfterRemove = JSON.parse(localStorage.getItem(`reviewsFilm${oneRev.ID}`))
               FilmArrayAfterRemove.splice(indexRemoveFromFilmArray, 1)
               localStorage.setItem(`reviewsFilm${oneRev.ID}`,JSON.stringify(FilmArrayAfterRemove))
               }
                
            }
            arrayReviews.splice(index, 1)



        }
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/ReviewFormStyle.scss';
</style>