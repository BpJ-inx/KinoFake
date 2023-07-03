let date = new Date()
let year = date.getFullYear();
let month = date.getMonth();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
month = months[month]

export let private_X_API_KEY = '8c8e1a50-6322-4135-8875-5d40a5420d86';
export let basic_X_API_KEY = '9A3NPT8-DRV4AHY-QG3HFAE-2GHT683';
export let fetchFilm = `https://api.kinopoisk.dev/v1/movie/`
export let fetchSearchName = `https://api.kinopoisk.dev/v1/movie?selectFields=rating.kp%20name%20year%20alternativeName%20poster.url%20countries.name%20description%20id&page=1&name=`
export let fetchPremieres = `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=${year}&month=${month}`
export let fetchTopNow = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page='
export let fetchBest = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page='



