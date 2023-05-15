import router from '../router/router'


export const fetchModule = {

    state: () => ({
        isRundomFilm : true
    }),

    getters: {
    },

    mutations: {
        setIsRundomFilm(state, isRundomFilm) {
            state.isRundomFilm = isRundomFilm
        },
    },
    actions: {

        async openFilmOnSelfPage(isRundomFilm,{  commit, dispatch }) {
            let selectedFimId = event.target.closest('div').id
            commit('setFetchRequest', false)
            await router.replace('/movepage')

            commit(`setFetchRequest`, `https://api.kinopoisk.dev/v1/movie/` + selectedFimId)

            document.querySelector('.aboutFilm').classList.remove('flex');
            document.querySelector('.aboutFilm').classList.add('hidden')
            document.querySelector('.spinner').classList.remove('hidden');


            await dispatch('fetchFunc')


            dispatch('informationRenderingFunc')

        },
    },
    namespaced: true
}