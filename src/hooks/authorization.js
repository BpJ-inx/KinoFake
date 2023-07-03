import router from '../router/router'



localStorage.setItem('1', 2)
localStorage.setItem('logNAME','')

// document.querySelector('.input_login').addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         document.querySelector('.input_password').focus()
//     };
// });

// document.querySelector('.input_password').addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         easyValidation()
//     };
// });


// function easyValidation() {
//     let r = new RegExp(/(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{6,16}/)
//     if (document.querySelector('.input_login').value.length < 3) {
//         document.querySelector('.input_login').value = '';
//         document.querySelector('.input_password').value = '';
//         typeOfAllert = 'Login is short';

//         return alertError()

//     }

//     if (document.querySelector('.input_password').value.length >= 6) {
//         if ((easyPassword.includes(document.querySelector('.input_password').value)) || (easyPassword.map(e => e.toUpperCase()).includes(document.querySelector('.reg_password_input').value))) {
//             document.querySelector('.input_password').value = '';
//             typeOfAllert = 'Password not secure';

//             return alertError()
//         }

//     } else {
//         document.querySelector('.input_password').value = '';
//         typeOfAllert = 'Password not secure';
//         return alertError()
//     }

//     if (r.test(document.querySelector('.input_password').value)) {
//         createNewAcc()
//     } else {
//         document.querySelector('.input_password').value = '';
//         typeOfAllert = 'Password not secure';
//         return alertError()
//     }

//       РЕГИСТРАЦИЯ
// }






export function checkProfile() {
    if (localStorage.getItem(document.querySelector('.input_login').value) == document.querySelector('.input_password').value) {
        localStorage.setItem('logNAME', document.querySelector('.input_login').value)


        hideMenu()
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

function hideMenu() {
    document.querySelector('.reg_place').classList.replace("flex", "hidden"),
        document.querySelector('body').classList.remove('overflow-hidden')
}

function changeButtons(){
    document.querySelector('.menu__Personal_page').innerHTML='Personal page'
}