<template>
    <div class="error__authorization_registration flex fixed">
        <div class="error_header">
            Error
        </div>
        <div class="error__body">
            {{ errorType }}
        </div>
    </div>
</template>

<script>
import { errorType } from '../hooks/authorization.js'

export default {
    name: 'dataerror',
    setup() {
        return {
            errorType
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/Components_styles/DataErrorStyle.scss';
</style>