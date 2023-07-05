import router from '../router/router'
import { changeButtons , hideMenuAfterLogin, changeAutho } from '../hooks/authorization.js'

let easyPassword = [
    '123456', 'qwerty', '123qwe', 'qwe123', '1q2w3e', '111111', '222222', '333333', '444444', '555555', '666666', 'qqqqqq', 'wwwwww', 'eeeeee', 'rrrrrr', 'tttttt', 'yyyyyy',
    '12345q', 'qwert1', '112233', 'qqwwee', '654321', 'ytrewq','3e2w1q'
]

export function switchForm() {
    if (document.querySelector('.form__registration').classList.contains('hidden')) {
        document.querySelector('.form__registration').classList.replace('hidden', 'flex')
        document.querySelector('.form__authorization').classList.replace('flex', 'hidden')
        document.querySelector('.input__login').value = ''
        document.querySelector('.input__password').value = ''
        startListenerEnterBut()
    }else{
        document.querySelector('.form__authorization').classList.replace('hidden', 'flex')
        document.querySelector('.form__registration').classList.replace('flex', 'hidden')
        document.querySelector('.input__login_reg').value = ''
        document.querySelector('.input__password_reg').value = ''
    }
}

function startListenerEnterBut() {
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
       

        console.log('Login is short');

    }

    if (document.querySelector('.input__password_reg').value.length >= 6) {
        if ((easyPassword.includes(document.querySelector('.input__password_reg').value)) || (easyPassword.map(e => e.toUpperCase()).includes(document.querySelector('.input__password_reg').value))) {
            document.querySelector('.input__password_reg').value = '';
            

            return console.log('Password not secure');
        }

    } else {
        document.querySelector('.input__password_reg').value = '';

      return  console.log('Password not secure');
    }

    if (r.test(document.querySelector('.input__password_reg').value)) {
        createNewAcc()
    } else {
        document.querySelector('.input__password_reg').value = '';
        return console.log('Password not secure');
    }


}

function createNewAcc() {
    if (!localStorage.getItem(document.querySelector('.input__login_reg').value)){
    localStorage.setItem(document.querySelector('.input__login_reg').value, document.querySelector('.input__password_reg').value)

    localStorage.setItem('logNAME',document.querySelector('.input__login_reg').value)
    document.querySelector('.input__login_reg').value = ''
    document.querySelector('.input__password_reg').value = ''

    changeButtons()
    hideMenuAfterLogin()
    switchForm()
    changeAutho()
    localStorage.setItem(`favorite.${localStorage.setItem('logNAME')},''`)
    router.replace('/personal')
}
else{

    document.querySelector('.input__login_reg').value = ''
    document.querySelector('.input__password_reg').value = ''
    return console.log('This name already exists');
}
}
