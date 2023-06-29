<template>
  <div class="regPlace hidden">
    <div class="emptyWindow"></div>
    <div class="authoReg flex-col dark:bg-gray-700">
      <div class="italic mt-5 mb-5">Registration/Authorization</div>
      <authoform></authoform>
    </div>

  </div>
</template>
  
<script>

export default {
}
</script>
  
<style lang="scss" scoped>
.regPlace {
  box-sizing: border-box;
  position: fixed;
  // position:absolute;
  // align-items: end;
  // flex-direction: row-reverse;
  z-index: 100;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  // pointer-events: none;
}

.authoReg {
  display: flex;
  height: 100%;
  width: 50vw;
  align-items: center;
  background: rgb(66, 66, 66);
  color: black;
  z-index: 101;
  overflow: hidden;
}

.emptyWindow {
  display: flex;
  height: 100%;
  width: 50vw;
  background-color: rgb(44, 43, 43);
  opacity: 0.5;
  z-index: 101;
  overflow: hidden;
}

@media (max-width: 1024px) {
  .emptyWindow {
    display: flex;
    width: 100%;
  }

  .authoReg {
    position: absolute;
    width: 100%;
    height: 50%;
    justify-content: center;
  }
}
</style>