import router from '../router/router'


localStorage.setItem('1', 2)
localStorage.setItem('logNAME', '')

export function authorizationСheck() {
    if (localStorage.getItem('logNAME') != '') {

        document.querySelector('.menu__Personal_page').addEventListener('click', router.replace('/personal'))
    } else {
        document.querySelector('.menu__Personal_page').addEventListener('click', openAuthoMenu())
    }
}

export function checkProfile() {
    if (localStorage.getItem(document.querySelector('.input_login').value) == document.querySelector('.input_password').value) {
        localStorage.setItem('logNAME', document.querySelector('.input_login').value)


        hideMenuAfterLogin()
        clearInputs()
        changeButtons()

        return router.replace('/personal');

    }
    if (localStorage.getItem(document.querySelector('.input_login').value) == null) {
        // typeOfAllert='Incorrect username'
        clearInputs()
        console.log('Incorrect username');
    } else {
        //    typeOfAllert='Incorrect password'
        clearInputs()
        console.log('Incorrect password');
    }
}

function clearInputs() {
    document.querySelector('.input_login').value = '';
    document.querySelector('.input_password').value = ''
}

function hideMenuAfterLogin() {
    document.querySelector('.reg_place').classList.replace("flex", "hidden"),
        document.querySelector('body').classList.remove('overflow-hidden')
}

function changeButtons() {
    document.querySelector('.menu__Personal_page').innerHTML = 'Personal page'
    document.querySelector('.menu__exit').classList.replace('hidden', 'block')
}


function openAuthoMenu() {
    showMenu()
    startListenerEnterBut()
}

function showMenu() {
    document.querySelector('.reg_place').classList.replace("hidden", "flex")
    document.querySelector('body').classList.add('overflow-hidden')
    hideMenuOnclick()
}

function hideMenuOnclick() {
    document.querySelector('.empty_window').addEventListener('click', () => {
        document.querySelector('.reg_place').classList.replace("flex", "hidden"),
            document.querySelector('body').classList.remove('overflow-hidden')
    }
    )
}

function startListenerEnterBut() {
    document.querySelector('.input_login').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            document.querySelector('.input_password').focus()
        };
    });

    document.querySelector('.input_password').addEventListener('keydown', (e) => {
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