<template>
    <div class="wrapper">
        <form class="form">
            <p class="header__reg_form mb-2 mt-2">Create your account</p>

            <div class="-ml-5">
                <label class="input_field_names input__login">Login:</label>
                <div class="recommendations ">(Login must contain more than 3 symbols)</div>
                <div class="">
                    <input class="inputs input_login text-sm rounded-lg  block w-72  p-2.5 px-5 
             dark:bg-gray-700  dark:placeholder-gray-400 text-white" placeholder="Create login" />

                </div>
            </div>

            <div class="mb-2">
                <label for="password" class="input_field_names input__password">Password:</label>
                <div class="recommendations">
                    (Password must be at least 6 characters long and contain uppercase, lowercase letters and numbers)
                </div>
                <div class="">
                    <input type="password" class="inputs input_password text-sm rounded-lg  block w-72  p-2.5 px-5 
             dark:bg-gray-700  dark:placeholder-gray-400 text-white" placeholder="••••••" />

                </div>
            </div>
            <div class="buttons">
                <button type="button"
                    class="but_sign rounded-xl h-10 px-5 mt-1 mb-1 font-medium text-gray-300 hover:text-white border-black mr-2">
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
import { switchForm } from '../../../hooks/registration.js'
export default {
    name: 'regform',

    setup() {

        return {
            switchForm
        }
    },

}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/UI_styles/URegFormStyle.scss';

.recommendations {
    font-size: 13px;
    margin-top: -5px;
    margin-bottom: 5px;
    // margin-left: 10px;
}
</style>