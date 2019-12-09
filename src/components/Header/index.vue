<template>
  <div class="main">
    <div class="header">
      <h1>奥斯卡影城-欢迎您!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name:'Header'
}
</script>

<style>
body, h1 {
  padding: 0;
  margin: 0;
}

.main {
  width: 100%;
}

.header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: red;
  text-align: center;
}

.header > h1 {
  font-size: 20px;
  font-weight: normal;
  color: #fff;
}


</style>