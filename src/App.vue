<template>
  <header>
    <navbar></navbar>
  </header>

  <main>

      <router-view></router-view>

    <div class="regPlace hidden ">
      <div class="emptyWindow"></div>
      <div class="autoReg">
        Registration/Authorization
      </div>
      
    </div>
  </main>

  <footer>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

.regPlace {
    box-sizing: border-box;
    position: fixed;
    align-items: end;
    z-index: 100;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    // pointer-events: none;
}
.autoReg{
  display: flex;
  height: 100%;
  width: 40%;
  justify-content: center;
  background-color: rgb(129, 128, 128);
  color: black;
  z-index: 101;
  overflow: hidden;
}
.emptyWindow{
  display: flex;
  height: 100%;
  width: 60%;
  background-color: rgb(44, 43, 43);
  opacity: 0.5;
  z-index: 101;
  overflow: hidden;
}
</style>