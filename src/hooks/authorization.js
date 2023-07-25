import router from '../router/router'
import { show } from './registration'
import { ref } from 'vue'
import { encryptPass } from './registration'

export const errorType = ref('')
export const ifErrorData = ref(false)
export const isCookie = ref(false)
export const isAuth = ref(false)

localStorage.setItem('1', '22a')
localStorage.setItem(`favorite.1`, JSON.stringify([]))
localStorage.setItem('reviews.1', JSON.stringify([]))
localStorage.setItem('logNAME', '')



export function changeAuth() {
    if (isAuth.value == false) {
        isAuth.value = true
    } else {
        isAuth.value = false
    }
}

export function checkAuth() {
    if (localStorage.getItem('logNAME')) {

        document.querySelector('.menu__Personal_page').addEventListener('click', router.replace('/personal'))


    } else {
        document.querySelector('.menu__Personal_page').addEventListener('click', showMenu())
    }
}

export function checkProfile() {
    let password = document.querySelector('.input__password').value

    password = encryptPass(password)

    if (localStorage.getItem(document.querySelector('.input__login').value) == password) {
        localStorage.setItem('logNAME', document.querySelector('.input__login').value)

        hideMenuAfterLogin()
        clearInputs()
        changeAuth()
        return router.replace('/personal');


    }
    if (localStorage.getItem(document.querySelector('.input__login').value) == null) {

        clearInputs()
        ifErrorData.value = true
        errorType.value = 'Incorrect username'
        setTimeout(() => { ifErrorData.value = false }, 1000)
        document.querySelector('.input__login').focus()
    } else {

        clearInputs()
        ifErrorData.value = true
        errorType.value = 'Incorrect password'
        setTimeout(() => { ifErrorData.value = false }, 1000)
        document.querySelector('.input__login').focus()
    }
}

function clearInputs() {
    document.querySelector('.input__login').value = '';
    document.querySelector('.input__password').value = ''
}

export function hideMenuAfterLogin() {
    document.querySelector('.autho_reg_place').classList.replace("flex", "hidden"),
        document.querySelector('body').classList.remove('overflow-hidden')
}


function showMenu() {
    document.querySelector('.autho_reg_place').classList.replace("hidden", "flex")
    document.querySelector('.input__login').focus()
    document.querySelector('body').classList.add('overflow-hidden')
    hideMenuOnclick()
}

function hideMenuOnclick() {
    document.querySelector('.empty_window').addEventListener('click', () => {
        document.querySelector('.autho_reg_place').classList.replace("flex", "hidden"),
            document.querySelector('body').classList.remove('overflow-hidden')
        if (document.querySelector('.input__login')) {
            document.querySelector('.input__login').value = ''
            document.querySelector('.input__password').value = ''
        } else {
            document.querySelector('.input__login_reg').value = ''
            document.querySelector('.input__password_reg').value = ''
            show.value = true
        }
    })
}

export function startListenerEnterButAuth() {
    document.querySelector('.input__login').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            document.querySelector('.input__password').focus()
        };
    });

    document.querySelector('.input__password').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            checkProfile()
        };
    });
}

export function exitFromProfile() {
    localStorage.setItem('logNAME', '')
    document.querySelector('.menu__Personal_page').innerHTML = 'Sign In'
    document.querySelector('.menu__exit').classList.replace('block', 'hidden')
    changeAuth()
    for (let i = 0; i < document.querySelectorAll('.fav__star').length; ++i) {
        document.querySelectorAll('.fav__star')[i].style.display = 'none'
    }
    router.replace('/')
}

export function checkGuest() {
    if (document.cookie.match('cookie__user_id')) {
        isCookie.value = false
    } else {
        isCookie.value = true
    }
}