

let userFavFilms = JSON.parse(localStorage.getItem(`favorite.${localStorage.getItem('logNAME')}`))

export let nameFavBut = 'To favorites'
export let isFav = false

export function addFavoriteFilm() {

    userFavFilms = JSON.parse(localStorage.getItem(`favorite.${localStorage.getItem('logNAME')}`))

    if (!userFavFilms.includes(document.querySelector('.idFilm').innerHTML)) {
        localStorage.setItem(`favorite.${localStorage.getItem('logNAME')}`, JSON.stringify(userFavFilms + '.' + document.querySelector('.idFilm').innerHTML))
        document.querySelector('.fav__star').style.display = 'flex'
        document.querySelector('.buttonFav').innerHTML = 'From Favorites'

    }else{
        document.querySelector('.buttonFav').innerHTML = 'To favorites'
        document.querySelector('.fav__star').style.display = 'none'
        localStorage.setItem(`favorite.${localStorage.getItem('logNAME')}`, JSON.stringify(userFavFilms.replace('.'+ document.querySelector('.idFilm').innerHTML,'')))
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

