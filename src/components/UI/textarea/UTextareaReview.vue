<template>
    <div class="reviews__header">
        <div class="reviews__header_name">Reviews :</div>
        <div class="reviews__header_user">{{ userName }}</div>
    </div>
    <div class="flex w-full h-52">
        <textarea cols="20" rows="5" class="reviews__text_area" placeholder="Write review"></textarea>
    </div>
    <ubutton class="send_but justify-center mt-3 lg:p-2 py-2 px-0 block " @click="sendFunction">Send</ubutton>
</template>

<script>

export default {
    name: 'utextarearev',
    data() {
        return {
            userName: ''
        }
    },
    props: {
        sendFunction: {
            type: Function,
            required: true,
        },
    },
    mounted() {
        if (localStorage.getItem('logNAME')) {
            this.userName = localStorage.getItem('logNAME')
        } else {
            this.userName = 'guest'
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/UI_styles/UTextareaReviewStyle.scss';
</style>