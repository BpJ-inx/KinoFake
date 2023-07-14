<template>
    <div class="pages" v-for="page in pages" :key="page">
        <ubutton class="page text-white">{{ page }} </ubutton>
    </div>
</template>

<script>

export default {
    name: 'upaginationreviews',
    props: {
        pages: {
            type: Number
        }

    }
}
</script>

<style lang="scss" scoped>
.pages {
    display: flex;
    justify-content: center;
    align-items: center;
}
.page{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: 10px;
    width: 35px;
    height: 35px;
}
</style>