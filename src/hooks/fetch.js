import axios from "axios";
import { onMounted, ref } from 'vue'
import router from '../router/router'

const isRandom = ref(true)
const selectedFimId = ref('')
const fetchRequest = ref(``)
const X_API_KEY = ref('')
const responseMove = ref([])

export function fetchMainTop() {
    const startSlice = ref(0)
    const endSlice = ref(5)
    const date = ref(new Date())
    const year = ref(date.value.getFullYear());
    const month = ref(date.value.getMonth());
    const responseFilms = ref([]);

    month.value == 0 ?
        month.value = "JANUARY" :
        month.value == 1 ?
            month.value = "FEBRUARY" :
            month.value == 2 ?
                month.value = "MARCH" :
                month.value == 3 ?
                    month.value = "APRIL" :
                    month.value == 4 ?
                        month.value = "MAY" :
                        month.value == 5 ?
                            month.value = "JUNE" :
                            month.value == 6 ?
                                month.value = "JULY" :
                                month.value == 7 ?
                                    month.value = "AUGUST" :
                                    month.value == 8 ?
                                        month.value = "SEPTEMBER" :
                                        month.value == 9 ?
                                            month.value = "OCTOBER" :
                                            month.value == 10 ?
                                                month.value = "NOVEMBER" :
                                                month.value = "DECEMBER";       ///strange... выглядит страшно  

    fetchRequest.value = `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year.value}&month=${month.value}`
    X_API_KEY.value = '8c8e1a50-6322-4135-8875-5d40a5420d86'
    

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

            responseFilms.value = responseFromServer.data.items.slice(startSlice.value, endSlice.value)

            startSlice.value += 5
            endSlice.value += 5
        }
        catch (e) {
            console.log(e)
        }
    }
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

    if (isRandom.value) {
        fetchRequest.value = `https://api.kinopoisk.dev/v1/movie/random`;
        X_API_KEY.value = '9A3NPT8-DRV4AHY-QG3HFAE-2GHT683'
    } else {
        fetchRequest.value = `https://api.kinopoisk.dev/v1/movie/${selectedFimId.value}`
        X_API_KEY.value = '9A3NPT8-DRV4AHY-QG3HFAE-2GHT683'
    }

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
            responseMove.value=[]
            responseMove.value.push(responseFromServer.data)
        }
        catch (e) {
            console.log(e)
        }

    }

    onMounted(fetchFunc)
    


    isRandom.value=true
    return {
        responseMove
    }
}



export function fetchSearch() {
    const searchQuery = ref(document.querySelector('.searchInput').value)
    document.querySelector('.searchInput').value = ''
    document.querySelector('.searchInput').blur()
    const responseSearchFilms = ref([])


    const fetchFunc = async () => {
        fetchRequest.value =
            `https://api.kinopoisk.dev/v1/movie?selectFields=rating.kp%20name%20year%20alternativeName%20poster.url%20countries.name%20description%20id&page=1&name=${searchQuery.value}`

        X_API_KEY.value = '9A3NPT8-DRV4AHY-QG3HFAE-2GHT683'

        try {
            let responseFromServer = await axios.get(fetchRequest.value,
                {
                    headers: {
                        'accept': 'application/json',
                        'X-API-KEY': X_API_KEY.value
                    }
                }
            )
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
                document.querySelector('.searchInput').value = ''
                document.querySelector('.errorPlace').classList.remove('hidden')
                document.querySelector('.textError').innerHTML = `Sorry, No results found for "${searchQuery.value}"`
            }
        }
        catch (e) {
            console.log(e)
        }

    }

    onMounted(fetchFunc)

    return {
        responseSearchFilms,
    }
}



export async function openFilmOnSelfPage() {
    selectedFimId.value = event.target.closest('div.filmCard').querySelector('.idFilm').innerHTML
    isRandom.value = false
    await router.replace('/movepage')
}
