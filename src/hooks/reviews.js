import { ref } from 'vue'

export const arrayReviews = ref([])
export const fiveRev = ref([])
export const pages = ref()
export const page = ref(1)

export function addReview() {
    if (localStorage.getItem('logNAME') || localStorage.getItem('guestID')) {
        let descriptionRev = document.querySelector('.reviews__text_area').value

        if (descriptionRev) {
            let userName = ''
            let idFilm = localStorage.getItem('filmID')
            let x = 0

            if (localStorage.getItem('logNAME')) {
                userName = localStorage.getItem('logNAME')
            } else {
                userName = localStorage.getItem('guestID')
            }

            if (localStorage.getItem('lengthRev')) {
                x = +localStorage.getItem('lengthRev')
            } else {
                localStorage.setItem('lengthRev', 0)

            }

            for (let i = 0; i < x + 1; ++i) {
                if (!localStorage.getItem(`Rev.${i}`)) {

                    let review = {
                        Name: userName,
                        ID: idFilm,
                        Description: descriptionRev,
                        reviewID: i,
                        FilmName: localStorage.getItem('filmName')
                    }

                    localStorage.setItem(`Rev.${[i]}`, JSON.stringify(review))

                    if (localStorage.getItem('logNAME')) {
                        let reviewsUser = JSON.parse(localStorage.getItem(`reviews.${localStorage.getItem('logNAME')}`))
                        reviewsUser.push(x)
                        localStorage.setItem(`reviews.${localStorage.getItem('logNAME')}`, JSON.stringify(reviewsUser))
                    } else {
                        let reviewsUser = JSON.parse(localStorage.getItem(`reviews.${localStorage.getItem('guestID')}`))
                        reviewsUser.push(x)
                        localStorage.setItem(`reviews.${localStorage.getItem('guestID')}`, JSON.stringify(reviewsUser))
                    }

                    if (localStorage.getItem(`reviewsFilm${idFilm}`)) {
                        let reviewsFilm = JSON.parse(localStorage.getItem(`reviewsFilm${idFilm}`))
                        reviewsFilm.push(x)
                        localStorage.setItem(`reviewsFilm${idFilm}`, JSON.stringify(reviewsFilm))
                    } else {
                        let reviewsFilm = []
                        reviewsFilm.push(x)
                        localStorage.setItem(`reviewsFilm${idFilm}`, JSON.stringify(reviewsFilm))
                    }

                    localStorage.setItem('lengthRev', +x + 1)
                    arrayReviews.value.unshift(JSON.parse(localStorage.getItem(`Rev.${i}`)))
                    fiveRev.value.unshift(JSON.parse(localStorage.getItem(`Rev.${i}`)))

                    if (Math.ceil(arrayReviews.length / 5) == 1) {
                        pages.value = 0

                    } else {
                        pages.value = Math.ceil(arrayReviews.length / 5)

                    }
                }
            }

            document.querySelector('.reviews__text_area').value = ''

        }
    }
}

export function removeReview(index, arrayReviews, oneRev) {
    let revID = oneRev.reviewID

    localStorage.removeItem(`Rev.${revID}`)
    let userArray = JSON.parse(localStorage.getItem(`reviews.${oneRev.Name}`))
    let indexRemoveFromUserArray = userArray.indexOf(revID)
    userArray.splice(indexRemoveFromUserArray, 1)
    localStorage.setItem(`reviews.${oneRev.Name}`, JSON.stringify(userArray))

    let FilmArray = JSON.parse(localStorage.getItem(`reviewsFilm${oneRev.ID}`))
    let indexRemoveFromFilmArray = FilmArray.indexOf(revID)
    FilmArray.splice(indexRemoveFromFilmArray, 1)
    localStorage.setItem(`reviewsFilm${oneRev.ID}`, JSON.stringify(FilmArray))

    localStorage.setItem('lengthRev', +localStorage.getItem('lengthRev') - 1)

    arrayReviews.splice(index, 1)
    fiveRev.value.splice(index, 1)

    if (Math.ceil(arrayReviews.length / 5) == 1) {
        // pages.value = 0
        pages.value = Math.ceil(arrayReviews.length / 5)
    } else {
        pages.value = Math.ceil(arrayReviews.length / 5)
    }
}


export function toPage(selectedPage) {
    page.value = selectedPage
    fiveRev.value = []
    if (this.arrayReviews.value) {
        fiveRev.value = this.arrayReviews.value.slice(5 * selectedPage - 5, 5 * selectedPage)
    } else {
        fiveRev.value = arrayReviews.value.slice(5 * selectedPage - 5, 5 * selectedPage)
    }
}