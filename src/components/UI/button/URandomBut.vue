<template>
    <button
        class="butRandom rounded-xl bg-gray-700 px-5 mt-1 mb-1 font-medium text-gray-300 transition duration-500 hover:bg-gray-600 hover:text-white active:bg-gray-400 border-black">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'urandombut',
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/UI_styles/URandomButStyle.scss';
</style>