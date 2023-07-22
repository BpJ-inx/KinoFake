<template>
    <div class="background">
        <div class="flex flex-col h-full justify-center items-center">
            <div class="modal_cookie flex flex-col ">
                <div class="modal_cookie__header">Your Privacy</div>
                <div class="modal_cookie__body">We use cookies to make sure that our website works properly.
                    By accepting cookies you give consent to the processing of your personal data.</div>
                <ubutton class="m-auto h-10 w-16  mt-6" @click="hideCookieAsk">Ok</ubutton>
            </div>
        </div>


    </div>
</template>

<script>
import { isCookie } from '../hooks/authorization.js'

export default {
    name: 'cookieask',

    mounted() {
        if (!isCookie) {
            document.querySelector('body').classList.add('overflow-hidden')
        }
        localStorage.setItem('freeIDUser', 0)
    },
    methods: {
        hideCookieAsk() {
            let freeIDUser
            if (localStorage.getItem('guestID') || document.cookie.match(new RegExp("(?:^|; )" + 'cookie__user_id'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))) {
                localStorage.setItem('guestID', `guest${document.cookie.match(new RegExp("(?:^|; )" + 'cookie__user_id'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))[1]}`)
            }

            if (!document.cookie.match(new RegExp("(?:^|; )" + 'cookie__user_id'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))) {
                freeIDUser = localStorage.getItem('freeIDUser')
            }

            document.querySelector('body').classList.remove('overflow-hidden')
            document.cookie = (`cookie__user_id= ${freeIDUser}`)
            localStorage.setItem('guestID', `guest${document.cookie.match(new RegExp("(?:^|; )" + 'cookie__user_id'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))[1]}`)
            localStorage.setItem(`reviews.${localStorage.getItem('guestID')}`, JSON.stringify([]))
            localStorage.setItem('freeIDUser', +localStorage.getItem('freeIDUser') + 1)
            isCookie.value = false
        }
    },
    setup() {
        return {
            isCookie
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/CookieAskStyle.scss';
</style>