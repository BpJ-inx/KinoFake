import router from '../router/router'


localStorage.setItem('1', 2)
localStorage.setItem('logNAME', '')

export function authorizationСheck() {
    if (localStorage.getItem('logNAME')) {

        document.querySelector('.menu__Personal_page').addEventListener('click', router.replace('/personal'))
    } else {
        document.querySelector('.menu__Personal_page').addEventListener('click', openAuthoMenu())
    }
}

export function checkProfile() {
    if (localStorage.getItem(document.querySelector('.input__login').value) == document.querySelector('.input__password').value) {
        localStorage.setItem('logNAME', document.querySelector('.input__login').value)


        hideMenuAfterLogin()
        clearInputs()
        changeButtons()

        return router.replace('/personal');

    }
    if (localStorage.getItem(document.querySelector('.input__login').value) == null) {

        clearInputs()
        console.log('Incorrect username');
    } else {

        clearInputs()
        console.log('Incorrect password');
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

export function changeButtons() {
    document.querySelector('.menu__Personal_page').innerHTML = 'Personal page'
    document.querySelector('.menu__exit').classList.replace('hidden', 'block')
}


function openAuthoMenu() {
    showMenu()
    startListenerEnterBut()
}

function showMenu() {
    document.querySelector('.autho_reg_place').classList.replace("hidden", "flex")
    document.querySelector('body').classList.add('overflow-hidden')
    hideMenuOnclick()
}

function hideMenuOnclick() {
    document.querySelector('.empty_window').addEventListener('click', () => {
        document.querySelector('.autho_reg_place').classList.replace("flex", "hidden"),
            document.querySelector('body').classList.remove('overflow-hidden')
    })
    if (document.querySelector('.form__authorization').classList.contains('hidden')) {
        document.querySelector('.form__authorization').classList.replace('hidden', 'flex')
        document.querySelector('.form__registration').classList.replace('flex', 'hidden')
        document.querySelector('.input__login_reg').value = ''
        document.querySelector('.input__password_reg').value = ''
    }
}

function startListenerEnterBut() {
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
    router.replace('/')
}