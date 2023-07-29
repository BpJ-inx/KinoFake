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

            <form id="sex" name="sex_form">
                <div class="wrapper__sex">
                    <input type="radio" name="select" id="male" value="male">
                    <input type="radio" name="select" id="female" value="female">
                    <input type="radio" name="select" id="noMatter" value="noMatter">
                    <label for="male" class="option male">
                        <div class="dot"></div>
                        <span>Male</span>
                    </label>
                    <label for="noMatter" class="option noMatter">
                        <div class="dot"></div>
                        <span>No matter</span>
                    </label>
                    <label for="female" class="option female">
                        <div class="dot"></div>
                        <span>Female</span>
                    </label>

                </div>
            </form>



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
    beforeUnmount(){
        document.querySelector('#male').checked = false
        document.querySelector('#female').checked = false
        document.querySelector('#noMatter').checked = false
    },
    setup() {

        return {
            switchForm,
            easyValidation,
            startListenerEnterBut,
        }
    },

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/RegFormStyle.scss';
</style>