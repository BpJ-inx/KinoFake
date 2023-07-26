<template>
    <div class="wrapper">
        <form class="form">
            <p class="header__reg_form mb-2 mt-2">Create your account</p>

            <div class="">
                <label class="input_field_names ">Login:</label>
                <div class="">
                    <input class="inputs input__login_reg text-sm rounded-lg  block w-72  p-2.5 px-5 
             dark:bg-gray-700  dark:placeholder-gray-400 text-white" placeholder="Create login" />

                </div>
            </div>

            <div class="mb-2">
                <label for="password" class="input_field_names ">Password:</label>
                <div class="">
                    <input type="password" class="inputs input__password_reg text-sm rounded-lg  block w-72  p-2.5 px-5 
             dark:bg-gray-700  dark:placeholder-gray-400 text-white" placeholder="Create password" />

                </div>
            </div>
            <div class="buttons">
                <button type="button"
                    class="but_sign rounded-xl h-10 px-5 mt-1 mb-1 font-medium text-gray-300 hover:text-white border-black mr-2"
                    @click="easyValidation">
                    Create
                </button>

            </div>

            <p class="">
                Already registered?
                <a class="switch__button cursor-pointer underline transition ease-in-out text-gray-400 hover:text-white"
                    @click="switchForm">Sign up</a>
            </p>
        </form>
    </div>
</template>

<script>
import { switchForm, easyValidation, startListenerEnterBut } from '../hooks/registration.js'
export default {
    mounted() {
        startListenerEnterBut()
    },
    setup() {

        return {
            switchForm,
            easyValidation,
            startListenerEnterBut
        }
    },

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/RegFormStyle.scss';
</style>