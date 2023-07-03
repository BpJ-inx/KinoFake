<template >
    <!-- <spinner></spinner> -->
    <div class="flex text-white mt-28 justify-center">Personal page `{{ name }}`</div>
</template>
  
<script>


export default {
data(){
    return{
        name :  localStorage.getItem('logNAME')
    }
}
};
</script>
  
<style lang="scss" scoped></style>