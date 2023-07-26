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
                        reviewsUser.push(i)
                        localStorage.setItem(`reviews.${localStorage.getItem('logNAME')}`, JSON.stringify(reviewsUser))
                    } else {
                        let reviewsUser = JSON.parse(localStorage.getItem(`reviews.${localStorage.getItem('guestID')}`))
                        reviewsUser.push(i)
                        localStorage.setItem(`reviews.${localStorage.getItem('guestID')}`, JSON.stringify(reviewsUser))
                    }

                    if (localStorage.getItem(`reviewsFilm${idFilm}`)) {
                        let reviewsFilm = JSON.parse(localStorage.getItem(`reviewsFilm${idFilm}`))
                        reviewsFilm.push(i)
                        localStorage.setItem(`reviewsFilm${idFilm}`, JSON.stringify(reviewsFilm))
                    } else {
                        let reviewsFilm = []
                        reviewsFilm.push(i)
                        localStorage.setItem(`reviewsFilm${idFilm}`, JSON.stringify(reviewsFilm))
                    }

                    localStorage.setItem('lengthRev', +x + 1)
                    arrayReviews.value.unshift(JSON.parse(localStorage.getItem(`Rev.${i}`)))

                    fiveRev.value = []
                    fiveRev.value = arrayReviews.value.slice(5 * page.value - 5, 5 * page.value)

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

export function removeReview(index, arrayRevs, oneRev) {
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


    let delObject = fiveRev.value.splice(index, 1)

    arrayRevs = arrayRevs.toSpliced(index, 1)
    arrayReviews.value = arrayReviews.value.toSpliced(arrayReviews.value.indexOf(delObject[0]), 1)

    if (fiveRev.value.length == 0) {
        if (page.value > 1) {
            page.value = page.value - 1
            fiveRev.value = arrayReviews.value.slice(5 * page.value - 5, 5 * page.value)
        } else {
            page.value = 1
        }
    }

    if (Math.ceil(arrayReviews.value.length / 5) == 1) {
        pages.value = 0
 
    } else {
        pages.value = Math.ceil(arrayReviews.value.length / 5)
    }
}


export function toPage(selectedPage) {
    page.value = selectedPage
    fiveRev.value = []
    fiveRev.value = arrayReviews.value.slice(5 * selectedPage - 5, 5 * selectedPage)
}


export function chengeArrayReview() {
    if (!localStorage.getItem(`reviewsFilm${localStorage.getItem('filmID')}`)) {
        arrayReviews.value = []
    } else {
        arrayReviews.value = []
        let reviewNumbers = JSON.parse(localStorage.getItem(`reviewsFilm${localStorage.getItem('filmID')}`))
        if (reviewNumbers) {
            for (let i = 0; i < reviewNumbers.length; ++i) {
                arrayReviews.value.push(JSON.parse(localStorage.getItem(`Rev.${reviewNumbers[i]}`)))
            }
        }

        arrayReviews.value.sort(function (a) {
            if (localStorage.getItem('logNAME')) {
                if (a.Name == localStorage.getItem('logNAME')) {
                    return -1;
                }
                else {
                    return 1;
                }
            } else {
                if (a.Name == localStorage.getItem('guestID')) {
                    return -1;
                }
                else {
                    return 1;
                }
            }
        });
    }

    if (Math.ceil(arrayReviews.value.length / 5) == 1) {
        pages.value = 0
    } else {
        pages.value = Math.ceil(arrayReviews.value.length / 5)
    }
}