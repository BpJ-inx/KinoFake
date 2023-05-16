<template>
    <button
        class="butRandom rounded-xl bg-gray-700 px-5 mt-1 mb-1 font-medium text-white transition duration-200 hover:bg-gray-600 active:bg-gray-400 border-black">
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