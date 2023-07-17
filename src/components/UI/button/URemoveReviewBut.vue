<template>
    <button
        class="but rounded-xl px-5 mt-1 mb-1 font-medium text-gray-300 hover:text-white border-black">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'uremoverevbut',
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/UI_styles/URemoveReviewButtonStyle .scss';
</style>