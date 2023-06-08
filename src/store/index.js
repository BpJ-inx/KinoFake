import {createStore} from 'vuex'


export default createStore({
    actions:{
        showAboutFilm() {
            document.querySelector('.aboutFilm').classList.remove('hidden');
            document.querySelector('.aboutFilm').classList.add('flex');
            document.querySelector('.spinner').classList.add('hidden');

            document.querySelector('.movie_rating').classList.remove('movie_rating_border_green', 'movie_rating_border_orange', 'movie_rating_border_red')
            if (document.querySelector('.movie_rating').innerText > 7.000) {
                document.querySelector('.movie_rating').classList.add('movie_rating_border_green')
            } else if (document.querySelectorAll('.movie_rating').innerText > 5.000 || document.querySelector('.movie_rating').innerText < 7.000) {
                document.querySelector('.movie_rating').classList.add('movie_rating_border_orange')
            } else if (document.querySelector('.movie_rating').innerText <= 5.000) {
                document.querySelector('.movie_rating').classList.add('movie_rating_border_red')
            }
            if (document.querySelector('.movie_rating').innerText == 0) {
                document.querySelector('.movie_rating').innerText = '-'
            }
        },

        showFilmCardWR() {
            document.querySelector('.resSearchFiveFilms').classList.remove('hidden');
            document.querySelector('.resSearchFiveFilms').classList.add('flex');
            document.querySelector('.spinner').classList.add('hidden');
          },
       

          showSearchedFilms() {

            if (document.querySelector('.errorPlace').classList.contains('hidden')) {
              document.querySelector('.resSearchFiveFilms').classList.remove('hidden');
              document.querySelector('.resSearchFiveFilms').classList.add('flex');
              document.querySelector('.spinner').classList.add('hidden');
            }
      
            for (let i = 0; i < document.querySelectorAll('.movie_rating').length; ++i) {
      
              if (document.querySelectorAll('.movie_rating')[i].innerText > 7) {
                document.querySelectorAll('.movie_rating')[i].classList.add('movie_rating_border_green')
              } else if (document.querySelectorAll('.movie_rating')[i].innerText > 5|| document.querySelector('.movie_rating').innerText < 7) {
                document.querySelectorAll('.movie_rating')[i].classList.add('movie_rating_border_orange')
              } else if (document.querySelectorAll('.movie_rating')[i].innerText <= 5) {
                document.querySelectorAll('.movie_rating')[i].classList.add('movie_rating_border_red')
              }
               if (document.querySelectorAll('.movie_rating')[i].innerText == 0) {
                document.querySelectorAll('.movie_rating')[i].innerText = '-'
              }
            }
      
          },

},
},
)