import router from '../router/router'
import { changeButtons, hideMenuAfterLogin, changeAutho } from '../hooks/authorization.js'
import { ref } from 'vue'
import { errorType, ifErrorData } from '../hooks/authorization.js'


export const show = ref(true)

let easyPassword = [
    '123456', 'qwerty', '123qwe', 'qwe123', '1q2w3e', '111111', '222222', '333333', '444444', '555555', '666666', 'qqqqqq', 'wwwwww', 'eeeeee', 'rrrrrr', 'tttttt', 'yyyyyy',
    '12345q', 'qwert1', '112233', 'qqwwee', '654321', 'ytrewq', '3e2w1q'
]

export function switchForm() {
    show.value = !show.value
    if (document.querySelector('.input__login')) {
        document.querySelector('.input__login').value = ''
        document.querySelector('.input__password').value = ''
    } else {
        document.querySelector('.input__login_reg').value = ''
        document.querySelector('.input__password_reg').value = ''
    }
}

export function startListenerEnterBut() {
    document.querySelector('.input__login_reg').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            document.querySelector('.input__password_reg').focus()
        };
    });



    document.querySelector('.input__password_reg').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            easyValidation()
        };
    });


}


export function easyValidation() {
    let r = new RegExp(/(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{6,16}/)
    if (document.querySelector('.input__login_reg').value.length < 3) {
        document.querySelector('.input__login_reg').value = '';
        document.querySelector('.input__password_reg').value = '';



        ifErrorData.value = true
        errorType.value = 'Login is short'
        setTimeout(() => { ifErrorData.value = false }, 1000)
        document.querySelector('.input__login_reg').focus()
        return
    }

    if (document.querySelector('.input__password_reg').value.length >= 6) {
        if ((easyPassword.includes(document.querySelector('.input__password_reg').value)) || (easyPassword.map(e => e.toUpperCase()).includes(document.querySelector('.input__password_reg').value))) {
            document.querySelector('.input__password_reg').value = '';

            ifErrorData.value = true
            errorType.value = 'Password not secure'
            setTimeout(() => { ifErrorData.value = false }, 1000)
            document.querySelector('.input__password_reg').focus()

            return
        }

    } else {
        document.querySelector('.input__password_reg').value = '';

        ifErrorData.value = true
        errorType.value = 'Password not secure'
        setTimeout(() => { ifErrorData.value = false }, 1000)
        document.querySelector('.input__password_reg').focus()


        return
    }

    if (r.test(document.querySelector('.input__password_reg').value)) {
        createNewAcc()
    } else {
        document.querySelector('.input__password_reg').value = '';

        ifErrorData.value = true
        errorType.value = 'Password not secure'
        setTimeout(() => { ifErrorData.value = false }, 1000)
        document.querySelector('.input__password_reg').focus()


        return
    }


}

function createNewAcc() {
    if (!localStorage.getItem(document.querySelector('.input__login_reg').value)) {
        localStorage.setItem(document.querySelector('.input__login_reg').value, document.querySelector('.input__password_reg').value)

        localStorage.setItem('logNAME', document.querySelector('.input__login_reg').value)
        document.querySelector('.input__login_reg').value = ''
        document.querySelector('.input__password_reg').value = ''

        changeButtons()
        hideMenuAfterLogin()
        switchForm()
        changeAutho()
        localStorage.setItem(`favorite.${localStorage.getItem('logNAME')}`, JSON.stringify([]))
        localStorage.setItem(`reviews.${localStorage.getItem('logNAME')}`, JSON.stringify([]))
        router.replace('/personal')
    }
    else {

        document.querySelector('.input__login_reg').value = ''
        document.querySelector('.input__password_reg').value = ''

        ifErrorData.value = true
        errorType.value = 'This name already exists'
        setTimeout(() => { ifErrorData.value = false }, 1000)
        document.querySelector('.input__login_reg').focus()

        return
    }
}
