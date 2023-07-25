<template>
    <div class="wrapper">
        <form class="form">
            <p class="header__autho_form mb-2 mt-2">Sign in to your account</p>

            <div class="">
                <label class="input_field_names ">Login:</label>

                <div class="">
                    <input class="inputs input__login text-sm rounded-lg  block w-72  p-2.5 px-5 
             dark:bg-gray-700  dark:placeholder-gray-400 text-white" placeholder="Enter login" />
                </div>
            </div>

            <div class="mb-2">
                <label for="password" class="input_field_names ">Password:</label>

                <div class="">
                    <input type="password" class="inputs input__password text-sm rounded-lg  block w-72  p-2.5 px-5 
             dark:bg-gray-700  dark:placeholder-gray-400 text-white" placeholder="••••••" />

                </div>
            </div>
            <div class="buttons">
                <button type="button"
                    class="but_sign rounded-xl h-10 px-5 mt-1 mb-1 font-medium text-gray-300 hover:text-white border-black mr-2"
                    @click="checkProfile">
                    Sign in
                </button>

            </div>

            <p class="">
                No account?
                <a class="switch__button cursor-pointer underline transition ease-in-out text-gray-400 hover:text-white"
                    @click="switchForm">Sign up</a>
            </p>
        </form>
    </div>
</template>

<script>
import { checkProfile, startListenerEnterButAuth } from '../hooks/authorization.js'
import { switchForm } from '../hooks/registration.js'

export default {
    mounted() {
        startListenerEnterButAuth()
    },
    setup() {
        return {
            checkProfile,
            switchForm,
            startListenerEnterButAuth,
        }
    },

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/AuthFormStyle.scss';
</style>