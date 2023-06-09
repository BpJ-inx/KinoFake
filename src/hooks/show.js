export function showFilm() {

    if (document.querySelector('.aboutFilm')) {
        document.querySelector('.aboutFilm').classList.remove('hidden');
        document.querySelector('.aboutFilm').classList.add('flex');

        document.querySelector('.movie_rating').classList.remove('movie_rating_border_green', 'movie_rating_border_orange', 'movie_rating_border_red')
        changeRating()
    } else {
        document.querySelector('.resSearchFiveFilms').classList.remove('hidden');
        document.querySelector('.resSearchFiveFilms').classList.add('flex');

    }
    document.querySelector('.spinner').classList.add('hidden');
}


export function showSearchedFilms() {
    changeRating()
    if (document.querySelector('.errorPlace').classList.contains('hidden')) {
        document.querySelector('.resSearchFiveFilms').classList.remove('hidden');
        document.querySelector('.resSearchFiveFilms').classList.add('flex');
        document.querySelector('.spinner').classList.add('hidden');
    }
}

function changeRating() {
    for (let i = 0; i < document.querySelectorAll('.movie_rating').length; ++i) {

        if (document.querySelectorAll('.movie_rating')[i].innerText > 7) {
            document.querySelectorAll('.movie_rating')[i].classList.add('movie_rating_border_green')
        } else if (document.querySelectorAll('.movie_rating')[i].innerText > 5 || document.querySelector('.movie_rating').innerText < 7) {
            document.querySelectorAll('.movie_rating')[i].classList.add('movie_rating_border_orange')
        } else if (document.querySelectorAll('.movie_rating')[i].innerText <= 5) {
            document.querySelectorAll('.movie_rating')[i].classList.add('movie_rating_border_red')
        }
        if (document.querySelectorAll('.movie_rating')[i].innerText == 0) {
            document.querySelectorAll('.movie_rating')[i].innerText = '-'
        }
    }

}
