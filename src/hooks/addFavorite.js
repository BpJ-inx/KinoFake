

let userFavFilms = JSON.parse(localStorage.getItem(`favorite.${localStorage.getItem('logNAME')}`))

export let isFav = false

export function addFavoriteFilm() {
    if (localStorage.getItem(`favorite.${localStorage.getItem('logNAME')}`)) {

        if (!userFavFilms.includes(document.querySelector('.idFilm').innerHTML)) {
            localStorage.setItem(`favorite.${localStorage.getItem('logNAME')}`, JSON.stringify(userFavFilms + '.' + document.querySelector('.idFilm').innerHTML))
            document.querySelector('.fav__star').style.display = 'flex'
            
        }
    } else {
        localStorage.setItem(`favorite.${localStorage.getItem('logNAME')}`, JSON.stringify(document.querySelector('.idFilm').innerHTML))
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

