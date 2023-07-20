
export function changeRating() {
    document.querySelector('.movie_rating').classList.remove('movie_rating_border_green', 'movie_rating_border_orange', 'movie_rating_border_red')
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
