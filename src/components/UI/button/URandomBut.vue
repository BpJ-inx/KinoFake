<template>
    <button
        class="butRandom rounded-xl px-5 mt-1 mb-1 font-medium text-gray-300 hover:text-white border-black">
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