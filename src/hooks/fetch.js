import axios from "axios";
import { onMounted, ref } from 'vue'
import router from '../router/router'
import { move_and_search_X_API_KEY, categories_X_API_KEY, fetchFilm, fetchSearchName, fetchPremieres, fetchTopNow, fetchBest, fetchFilmById, favorite_movies_X_API_KEY } from '../urlConfig.js'

const isRandom = ref(true)
const selectedFimId = ref('')
const fetchRequest = ref(``)
const X_API_KEY = ref(move_and_search_X_API_KEY)
const responseMove = ref([])
const responseFilms = ref([]);
const responseFavFilms = ref([]);
const responseReviews = ref([]);
const startSlice = ref(0)
const endSlice = ref(5)
const whatPageRequest = ref('main')
const responseSearchFilms = ref([])
const searchQuery = ref('')
const response = ref([])
const prevRespPremiers = ref([]);
const prevRespTop = ref([]);
const prevRespBest = ref([]);
export const isLoaded = ref(false)
export const isErrorSearch = ref(false)
export const textError = ref('')
const responseFromServer = ref([])
localStorage.setItem('filmID', '')
localStorage.setItem('filmName', '')

const fetchFunc = async () => {

    try {
        responseFromServer.value = await axios.get(fetchRequest.value,
            {
                headers: {
                    'accept': 'application/json',
                    'X-API-KEY': X_API_KEY.value
                }
            }
        )


        if (whatPageRequest.value == 'main') {
            changeOnRequestMain(responseFromServer)
        }
        else if (whatPageRequest.value == 'move') {
            changeOnRequestMove(responseFromServer)
        } else if (whatPageRequest.value == 'search') {
            changeOnRequestSearch(responseFromServer)
        } else if (whatPageRequest.value == 'premier') {
            changeOnRequestPremier(responseFromServer)
        } else if (whatPageRequest.value == 'top/best') {
            changeOnRequestTopBest(responseFromServer)
        }
    }
    catch (e) {
        console.log(e)
    }

}


function changeOnRequestMain() {
    response.value = responseFromServer.value

}
function changeOnRequestPremier() {
    responseFilms.value = responseFromServer.value.data.items.slice(startSlice.value, endSlice.value)
    startSlice.value += 20,
        endSlice.value += 10
    isLoaded.value = true
}

function changeOnRequestTopBest() {
    responseFilms.value = responseFromServer.value.data.films.slice(startSlice.value, endSlice.value)
    isLoaded.value = true
}

function changeOnRequestMove() {
    responseMove.value = []
    responseMove.value.push(responseFromServer.value.data)

    localStorage.setItem('filmID', responseMove.value[0].id)
    localStorage.setItem('filmName', responseMove.value[0].name)
    isLoaded.value = true
}

function changeOnRequestSearch() {
    if (responseFromServer.value.data.docs.length != 0) {
        responseSearchFilms.value = responseFromServer.value.data.docs

        for (let i = 0; i < responseSearchFilms.value.length; ++i) {
            if (!responseSearchFilms.value[i].poster) {
                responseSearchFilms.value[i].poster = {}
                responseSearchFilms.value[i].poster.url = 'src/assets/img/nonPoster.png'
            }
        }
        isLoaded.value = true
    } else {
        isErrorSearch.value = true
        textError.value = `Sorry, No results found for "${searchQuery.value}"`
    }
}

export function fetchMainTop() {
    isLoaded.value = false
    whatPageRequest.value = 'main'
    startSlice.value = 0
    endSlice.value = 5

    fetchRequest.value = fetchPremieres
    X_API_KEY.value = categories_X_API_KEY

    onMounted(fetchsMainPage)

    return {
        prevRespPremiers,
        prevRespTop,
        prevRespBest
    }
}

const fetchsMainPage = async () => {
    await fetchFunc()
    prevRespPremiers.value = response.value.data.items.slice(startSlice.value, endSlice.value)

    fetchRequest.value = fetchTopNow + `1`
    await fetchFunc()
    prevRespTop.value = response.value.data.films.slice(startSlice.value, endSlice.value)

    fetchRequest.value = fetchBest + `1`
    await fetchFunc()
    prevRespBest.value = response.value.data.films.slice(startSlice.value, endSlice.value)
    isLoaded.value = true
}



export function fetchPremieresTop() {
    isLoaded.value = false
    whatPageRequest.value = 'premier'
    startSlice.value = 0
    endSlice.value = 20

    fetchRequest.value = fetchPremieres
    X_API_KEY.value = categories_X_API_KEY

    onMounted(fetchFunc)

    return {
        responseFilms,
        startSlice,
        endSlice,
        fetchRequest,
        X_API_KEY,
    }
}

export function fetchPopNow() {
    isLoaded.value = false
    whatPageRequest.value = 'top/best'
    let pageNumber = '1'

    fetchRequest.value = fetchTopNow + pageNumber
    X_API_KEY.value = categories_X_API_KEY

    onMounted(fetchFunc)

    fetchRequest.value = fetchTopNow

    return {
        responseFilms,
        fetchRequest,
        X_API_KEY,
        pageNumber
    }
}

export function fetchBestFilms() {
    whatPageRequest.value = 'top/best'
    let pageNumber = '1'

    fetchRequest.value = fetchBest + pageNumber
    X_API_KEY.value = categories_X_API_KEY

    onMounted(fetchFunc)

    fetchRequest.value = fetchBest

    return {
        responseFilms,
        fetchRequest,
        X_API_KEY,
        pageNumber
    }
}

export function fetchMove() {
    isLoaded.value = false
    whatPageRequest.value = 'move'
    X_API_KEY.value = move_and_search_X_API_KEY

    isRandom.value ?
        fetchRequest.value = fetchFilm + 'random' :
        fetchRequest.value = fetchFilm + selectedFimId.value

    onMounted(fetchFunc)


    isRandom.value = true

    return {
        responseMove,
        fetchRequest,
        X_API_KEY,
    }
}

export function fetchSearch() {
    isLoaded.value = false
    whatPageRequest.value = 'search'
    X_API_KEY.value = move_and_search_X_API_KEY

    responseSearchFilms.value = []
    document.querySelector('.searchInput').blur()

    fetchRequest.value = fetchSearchName + searchQuery.value

    document.querySelector('.searchInput').value = ''

    onMounted(fetchFunc)


    return {
        responseSearchFilms,
        X_API_KEY,
        searchQuery
    }
}

export async function openFilmOnSelfPage(revID) {
    if (!event.target.closest('button.button__del_fav')) {
        if (event.target.closest('div.filmCard')) {
            selectedFimId.value = event.target.closest('div.filmCard').querySelector('.idFilm').innerHTML
            localStorage.setItem('filmName', (event.target.closest('div.filmCard').querySelector('.nameFilm').innerHTML).trim())
            localStorage.setItem('filmID', selectedFimId.value.trim())
        } else {
            selectedFimId.value = revID
            localStorage.setItem('filmName', (event.target.closest('div.review__header').querySelector('.review__header__name_film').innerHTML).trim())
            localStorage.setItem('filmID', selectedFimId.value.trim())
        }
        isRandom.value = false
        await router.replace('/movepage')
    }
}

import { IdFilmsArray, favPage } from '../hooks/favorite.js'

export function fetchFavFilms() {

    isLoaded.value = false;
    X_API_KEY.value = favorite_movies_X_API_KEY;
    responseFavFilms.value = [];
    IdFilmsArray.value = [];
    let trheeFilms = [];

    IdFilmsArray.value = JSON.parse(localStorage.getItem(`favorite.${localStorage.getItem('logNAME')}`))

    if (favPage.value == 0) {
        trheeFilms = IdFilmsArray.value.slice(0, 3)
    } else {
        trheeFilms = IdFilmsArray.value.slice(3 * favPage.value - 3, 3 * favPage.value)
    }
    if (trheeFilms.length != 0) {
        trheeFilms.forEach(async function (id) {

            fetchRequest.value = fetchFilmById + String(id);
            await fetchFunc()

            responseFavFilms.value = [...responseFavFilms.value,
            responseFromServer.value.data]

        });

    }
    isLoaded.value = true
    return {
        responseFavFilms,

    }
}

export function fetchRev() {
    responseReviews.value = [];
    let name = localStorage.getItem('logNAME')
    if (JSON.parse(localStorage.getItem(`reviews.${name}`)).length != 0) {
        let arrayIdRev = JSON.parse(localStorage.getItem(`reviews.${name}`))
        for (let i = 0; i < arrayIdRev.length; ++i) {
            let rev = JSON.parse(localStorage.getItem(`Rev.${arrayIdRev[i]}`))

            responseReviews.value = [...responseReviews.value, rev]
            responseReviews.value = [...responseReviews.value]

        }
    }

    return {

        responseReviews
    }
}


export default {
    searchQuery
}