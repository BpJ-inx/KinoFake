<template >
    <h1 class="header">Personal page :</h1>
    <div class="flex justify-between mt-7">
        <div class="w-full">
            <div class="person__name ml-11">
                Name : {{ name }}
            </div>
            <div class="reviews ml-11">
                Reviews :
                <div class="reviews__place">
                </div>
            </div>
        </div>
        <div class="favorites w-full">
            <div>
                <div class="ml-11">Favorites :</div>
                <div class="favorites__place">
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>


export default {
    data() {
        return {
            name: localStorage.getItem('logNAME')
        }
    }
};
</script>
  
<style lang="scss" scoped>
.header {
    display: flex;
    font-family: Tahoma, Arial, Verdana, sans-serif;
    font-size: 25px;
    margin-top: 100px;
    padding: 10px;
    justify-content: center;
}
.person__name,
.favorites,
.reviews
{
    display: flex;
    font-family: Tahoma, Arial, Verdana, sans-serif;
    font-size: 25px;
    padding: 10px;
    // margin-left: 45px;
}
</style>