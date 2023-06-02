import axios from "axios";
import { onMounted, ref } from 'vue'
import router from '../router/router'
import { basic_X_API_KEY, private_X_API_KEY } from '../urlConfig.js'

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
        }
    }
    catch (e) {
        console.log(e)
    }
    
}


function changeOnRequestMain(responseFromServer) {
    responseFilms.value = responseFromServer.data.items.slice(startSlice.value, endSlice.value),
        startSlice.value += 20,
        endSlice.value += 10
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
    const date = ref(new Date())
    const year = ref(date.value.getFullYear());
    const month = ref(date.value.getMonth());
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    whatPageRequest.value = 'main'
    startSlice.value = 0
    endSlice.value = 20

    month.value = months[month.value]

    fetchRequest.value = `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year.value}&month=${month.value}`
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

export function fetchMove() {
    whatPageRequest.value = 'move'
    X_API_KEY.value = basic_X_API_KEY

    isRandom.value ?
        fetchRequest.value = 'https://api.kinopoisk.dev/v1/movie/random' :
        fetchRequest.value = `https://api.kinopoisk.dev/v1/movie/${selectedFimId.value}`

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

    fetchRequest.value =
        `https://api.kinopoisk.dev/v1/movie?selectFields=rating.kp%20name%20year%20alternativeName%20poster.url%20countries.name%20description%20id&page=1&name=${searchQuery.value}`

    document.querySelector('.searchInput').value = ''

    onMounted(fetchFunc)

    return {
        responseSearchFilms,
        fetchRequest,
        X_API_KEY,
    }
}

export async function openFilmOnSelfPage() {
    selectedFimId.value = event.target.closest('div.filmCard').querySelector('.idFilm').innerHTML
    isRandom.value = false
    await router.replace('/movepage')
}

export default {
    searchQuery
}