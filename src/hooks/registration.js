import router from '../router/router'
import { hideMenuAfterLogin, changeAuth } from '../hooks/authorization.js'
import { ref } from 'vue'
import { errorType, ifErrorData } from '../hooks/authorization.js'

export const show = ref(true)
const gender = ref(false)
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
    checkUserGender()

    let r = new RegExp(/(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{6,16}/)
    if (document.querySelector('.input__login_reg').value.length < 3) {
        document.querySelector('.input__login_reg').value = '';
        document.querySelector('.input__password_reg').value = '';

        ifErrorData.value = true
        errorType.value = 'Login must contain more than 3 symbols'
        setTimeout(() => { ifErrorData.value = false }, 4000)
        document.querySelector('.input__login_reg').focus()
        return
    }

    if (document.querySelector('.input__password_reg').value.length >= 6) {
        if ((easyPassword.includes(document.querySelector('.input__password_reg').value)) || (easyPassword.map(e => e.toUpperCase()).includes(document.querySelector('.input__password_reg').value))) {
            document.querySelector('.input__password_reg').value = '';

            ifErrorData.value = true
            errorType.value = `Password must be at least 6 symbols long and contain uppercase, lowercase letters and numbers`
            setTimeout(() => { ifErrorData.value = false }, 4000)
            document.querySelector('.input__password_reg').focus()

            return
        }

    } else {
        document.querySelector('.input__password_reg').value = '';

        ifErrorData.value = true
        errorType.value = 'Password must be at least 6 symbols long and contain uppercase, lowercase letters and numbers'
        setTimeout(() => { ifErrorData.value = false }, 4000)
        document.querySelector('.input__password_reg').focus()

        return
    }

    if (r.test(document.querySelector('.input__password_reg').value)) {
        createNewAcc()
    } else {
        document.querySelector('.input__password_reg').value = '';

        ifErrorData.value = true
        errorType.value = 'Password must be at least 6 symbols long and contain uppercase, lowercase letters and numbers'
        setTimeout(() => { ifErrorData.value = false }, 4000)
        document.querySelector('.input__password_reg').focus()

        return
    }
}

function createNewAcc() {
    let password = document.querySelector('.input__password_reg').value

    password = encryptPass(password)

    if (!localStorage.getItem(document.querySelector('.input__login_reg').value)) {
        localStorage.setItem(document.querySelector('.input__login_reg').value, password)

        localStorage.setItem('logNAME', document.querySelector('.input__login_reg').value)
        document.querySelector('.input__login_reg').value = ''
        document.querySelector('.input__password_reg').value = ''

        hideMenuAfterLogin()
        switchForm()
        changeAuth()
        localStorage.setItem(`favorite.${localStorage.getItem('logNAME')}`, JSON.stringify([]))
        localStorage.setItem(`reviews.${localStorage.getItem('logNAME')}`, JSON.stringify([]))

        let randomNumberIcon = Math.floor(1+Math.random() * 2)
        if(gender.value == 'male'){
            localStorage.setItem(`icon.${localStorage.getItem('logNAME')}`, `M${randomNumberIcon}`) 
        }else if(gender.value == 'female'){
            localStorage.setItem(`icon.${localStorage.getItem('logNAME')}`, `F${randomNumberIcon}`) 
        }else {
            localStorage.setItem(`icon.${localStorage.getItem('logNAME')}`, 'NM') 
        }
        
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



export function checkUserGender() {
    let form = document.querySelector('#sex')
    let formD = new FormData(form);
    for (const entry of formD) {
        gender.value = entry[1];
    };
    if (gender.value != 'male' && gender.value != 'female'&& gender.value != 'noMatter') {
        gender.value = 'noMatter'
    }

}

export function encryptPass(password) {
    let encrypted = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < password.length; i++) {
        encrypted += alphabet[i % alphabet.length] + "2" + password[i];
    }
    return encrypted.split("").reverse().join("");
}
