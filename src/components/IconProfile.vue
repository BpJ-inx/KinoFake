<template>
    <iconM1 v-if="M1"></iconM1>
    <iconM2 v-if="M2"></iconM2>
    <iconF1 v-if="F1"></iconF1>
    <iconF2 v-if="F2"></iconF2>
    <iconNM v-if="NM"></iconNM>
</template>

<script>
export default {
    data() {
        return {
            name: localStorage.getItem('logNAME'),
            icon: '',
            M1: false,
            M2: false,
            F1: false,
            F2: false,
            NM: true,
        }
    },
    beforeMount() {
        this.icon = localStorage.getItem(`icon.${this.name}`)
        if (this.icon != "NM") {
            this.NM = false
            this.icon == 'M1' ? this.M1 = true : 
            this.icon == 'M2' ? this.M2 = true : 
            this.icon == 'F1' ? this.F1 = true : 
            this.icon == 'F2' ? this.F2 = true : 
            this.NM = true
        }
    }
}
</script>

<style lang="scss" scoped></style>