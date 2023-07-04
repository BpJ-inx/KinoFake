import router from '../router/router'

export function switchForm() {
    if (document.querySelector('.form__registration').classList.contains('hidden')) {
        document.querySelector('.form__registration').classList.replace('hidden', 'flex')
        document.querySelector('.form__authorization').classList.replace('flex', 'hidden')
    }else{
        document.querySelector('.form__authorization').classList.replace('hidden', 'flex')
        document.querySelector('.form__registration').classList.replace('flex', 'hidden')
    }
}