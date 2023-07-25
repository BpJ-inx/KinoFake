<template>
  <div class="autho_reg_place hidden">
    <div class="empty_window">
      <div class="cancel">
        <ubigcross></ubigcross>
      </div>
    </div>
    <div class="autho_reg flex-col dark:bg-gray-700">
      <div class="section_title">
        <h1 class="section_title_name">Registration/Authorization</h1>
      </div>
      <transition name="autho_reg_forms-trans">
        <authoform class="form__authorization flex fixed mt-10" v-if="show"></authoform>
      </transition>
      <transition name="autho_reg_forms-trans">
        <regform class="form__registration flex fixed mt-10" v-if="!show"></regform>
      </transition>
      <transition name="data_error-trans">
        <data-error v-if="ifErrorData"></data-error>
      </transition>

    </div>

  </div>
</template>
  
<script>
import { Transition } from 'vue';
import DataError from '../components/DataError.vue'
import { show } from '../hooks/registration.js'
import { ifErrorData } from '../hooks/authorization.js'

export default {
  components: {
    Transition,
    DataError
  },
  setup() {
    return {
      show,
      ifErrorData
    }
  }
}

</script>
  
<style lang="scss" scoped>
@import '../assets/styles/Components_styles/AuthoAndRegFormStyle.scss';
</style>