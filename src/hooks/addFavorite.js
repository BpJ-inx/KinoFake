
let userFavFilms = []
 userFavFilms = JSON.parse(localStorage.getItem(`favorite.${localStorage.getItem('logNAME')}`))

export let nameFavBut = 'To favorites'
export let isFav = false

export function addFavoriteFilm() {

    userFavFilms = JSON.parse(localStorage.getItem(`favorite.${localStorage.getItem('logNAME')}`))

    if (!userFavFilms.includes(document.querySelector('.idFilm').innerHTML)) {

        userFavFilms.push(document.querySelector('.idFilm').innerHTML)
        localStorage.setItem(`favorite.${localStorage.getItem('logNAME')}`, JSON.stringify(userFavFilms))
        document.querySelector('.fav__star').style.display = 'flex'
        document.querySelector('.buttonFav').innerHTML = 'From Favorites'

    } else {
        document.querySelector('.buttonFav').innerHTML = 'To favorites'
        document.querySelector('.fav__star').style.display = 'none'
        
        userFavFilms.splice(userFavFilms.indexOf(document.querySelector('.idFilm').innerHTML),1)
        localStorage.setItem(`favorite.${localStorage.getItem('logNAME')}`, JSON.stringify(userFavFilms))
    }

}

export function checkIsFav() {
    userFavFilms = JSON.parse(localStorage.getItem(`favorite.${localStorage.getItem('logNAME')}`))
    if (userFavFilms) {
        if (userFavFilms.includes(localStorage.getItem(`filmID`))) {
            isFav = true
            nameFavBut = 'From Favorites'
        } else {
            isFav = false
            nameFavBut = 'To favorites'
        }
    } else {
        isFav = false
        nameFavBut = 'To favorites'
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
    if (userFavFilms.includes( String(film))) {
        return true

    } else {
        return false

    }
}
