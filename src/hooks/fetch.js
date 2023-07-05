import axios from "axios";
import { onMounted, ref } from 'vue'
import router from '../router/router'
import { basic_X_API_KEY, private_X_API_KEY, fetchFilm, fetchSearchName, fetchPremieres, fetchTopNow, fetchBest } from '../urlConfig.js'

const isRandom = ref(true)
const selectedFimId = ref('')
const fetchRequest = ref(``)
const X_API_KEY = ref(basic_X_API_KEY)
const responseMove = ref([])
const responseFilms = ref([]);
const startSlice = ref(0)
const endSlice = ref(5)
const whatPageRequest = ref('main')
const responseSearchFilms = ref([])
const searchQuery = ref('')
const response = ref([])
const prevRespPremiers = ref([]);
const prevRespTop = ref([]);
const prevRespBest = ref([]);
localStorage.setItem('filmID','')
const fetchFunc = async () => {

    try {
        let responseFromServer = await axios.get(fetchRequest.value,
            {
                headers: {
                    'accept': 'application/json',
                    'X-API-KEY': X_API_KEY.value
                }
            }
        )

   

        if (whatPageRequest.value == 'main') {
            changeOnRequestMain(responseFromServer)
        } else if (whatPageRequest.value == 'move') {
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


function changeOnRequestMain(responseFromServer) {
    response.value = responseFromServer

}
function changeOnRequestPremier(responseFromServer) {
    responseFilms.value = responseFromServer.data.items.slice(startSlice.value, endSlice.value)
        startSlice.value += 20,
        endSlice.value += 10
}

function changeOnRequestTopBest(responseFromServer) {
    responseFilms.value = responseFromServer.data.films.slice(startSlice.value, endSlice.value)
}

function changeOnRequestMove(responseFromServer) {
    responseMove.value = []
    responseMove.value.push(responseFromServer.data)
}

function changeOnRequestSearch(responseFromServer) {
    if (responseFromServer.data.docs.length != 0) {
        responseSearchFilms.value = responseFromServer.data.docs

        for (let i = 0; i < responseSearchFilms.value.length; ++i) {
            if (!responseSearchFilms.value[i].poster) {
                responseSearchFilms.value[i].poster = {}
                responseSearchFilms.value[i].poster.url = 'src/assets/img/nonPoster.png'
            }
        }
    } else {
        document.querySelector('.spinner').classList.add('hidden')
        document.querySelector('.resSearchFiveFilms').classList.add('hidden')
        document.querySelector('.errorPlace').classList.remove('hidden')
        document.querySelector('.textError').innerHTML = `Sorry, No results found for "${searchQuery.value}"`
    }
}


export function fetchMainTop() {
    whatPageRequest.value = 'main'
    startSlice.value = 0
    endSlice.value = 5

    fetchRequest.value = fetchPremieres
    X_API_KEY.value = private_X_API_KEY

    onMounted(fetchsMainPage)

    return {
        prevRespPremiers,
        prevRespTop,
        prevRespBest
    }
}

const fetchsMainPage = async () => {
    await fetchFunc()
    prevRespPremiers.value = response.value = response.value.data.items.slice(startSlice.value, endSlice.value)

    fetchRequest.value = fetchTopNow + `1`
    await fetchFunc()
    prevRespTop.value = response.value = response.value.data.films.slice(startSlice.value, endSlice.value)

    fetchRequest.value = fetchBest + `1`
    await fetchFunc()
    prevRespBest.value = response.value = response.value.data.films.slice(startSlice.value, endSlice.value)
}



export function  fetchPremieresTop() {
    whatPageRequest.value = 'premier'
    startSlice.value = 0
    endSlice.value = 20

    fetchRequest.value = fetchPremieres
    X_API_KEY.value = private_X_API_KEY

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
    whatPageRequest.value = 'top/best'
    let pageNumber = '1'

    fetchRequest.value = fetchTopNow + pageNumber
    X_API_KEY.value = private_X_API_KEY

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
    X_API_KEY.value = private_X_API_KEY

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
    whatPageRequest.value = 'move'
    X_API_KEY.value = basic_X_API_KEY

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
    whatPageRequest.value = 'search'
    X_API_KEY.value = basic_X_API_KEY

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

export async function openFilmOnSelfPage() {
    selectedFimId.value = event.target.closest('div.filmCard').querySelector('.idFilm').innerHTML
    localStorage.setItem('filmID',selectedFimId.value.trim())
    isRandom.value = false
    await router.replace('/movepage')
}

export default {
    searchQuery
}