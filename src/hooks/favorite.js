import { ref } from "vue"

export const IdFilmsArray = ref([])
export const favPage = ref(1)
export const favPages = ref()

let userFavFilms = []
userFavFilms = JSON.parse(localStorage.getItem(`favorite.${localStorage.getItem('logNAME')}`))

export let isFav = false

export function addFavoriteFilm() {

    userFavFilms = JSON.parse(localStorage.getItem(`favorite.${localStorage.getItem('logNAME')}`))

    if (!userFavFilms.includes(document.querySelector('.idFilm').innerHTML)) {

        userFavFilms.push(document.querySelector('.idFilm').innerHTML)
        localStorage.setItem(`favorite.${localStorage.getItem('logNAME')}`, JSON.stringify(userFavFilms))

        document.querySelector('.star_but').style.fill = 'red'

    } else {
        document.querySelector('.star_but').style.fill = '#2c2b2f'


        userFavFilms.splice(userFavFilms.indexOf(document.querySelector('.idFilm').innerHTML), 1)
        localStorage.setItem(`favorite.${localStorage.getItem('logNAME')}`, JSON.stringify(userFavFilms))
    }

}

export function checkIsFav() {
    userFavFilms = JSON.parse(localStorage.getItem(`favorite.${localStorage.getItem('logNAME')}`))
    if (userFavFilms) {
        if (userFavFilms.includes(localStorage.getItem(`filmID`))) {
            isFav = true
        } else {
            isFav = false
        }
    } else {
        isFav = false

    }

}

export function checkFavOnlyPoster(film, film2) {
    userFavFilms = JSON.parse(localStorage.getItem(`favorite.${localStorage.getItem('logNAME')}`))

    if (!film) {
        film = film2
    }
    if (userFavFilms == null) {
        return false
    }
    if (userFavFilms.includes(String(film))) {
        return true

    } else {
        return false

    }
}

export function deleteFromFav() {
    let targetId = String(event.target.closest('div.filmCard').querySelector('.idFilm').innerHTML)
    userFavFilms = JSON.parse(localStorage.getItem(`favorite.${localStorage.getItem('logNAME')}`))
    userFavFilms.splice(userFavFilms.indexOf(targetId), 1)
    localStorage.setItem(`favorite.${localStorage.getItem('logNAME')}`, JSON.stringify(userFavFilms))
    event.target.closest('div').classList.replace('flex', 'hidden')


    IdFilmsArray.value.splice(IdFilmsArray.value.indexOf(targetId), 1)

    favPage.value = Math.ceil(IdFilmsArray.value.length / 3)

    fetchFavFilms()
}

import { fetchFavFilms, isLoaded } from '../hooks/fetch.js'

export function toPage(selectedPage) {
    if (!(favPage.value == selectedPage)) {
        isLoaded.value = false
        favPage.value = selectedPage
        fetchFavFilms()
    }
}


export function chengeColorStarButIfFav() {
    if (isFav == true) {
        document.querySelector('.star_but').style.fill = 'red'
    }
}