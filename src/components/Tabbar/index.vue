<template>
  <div class="main">
    <ul class="tabbar">
      <router-link tag="li" to="/movie">电影</router-link>
      <router-link tag="li" to="/cinema">影院</router-link>
      <router-link tag="li" to="/mine">我的</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style>
li {
  list-style: none;
}

ul {
  margin: 0;
  padding: 0;
}

.tabbar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #999;
  display: flex;
  text-align: center;
  align-items: center;
  height: 50px;
}

.tabbar li {
  flex: 1;
  height: 40px;
  line-height: 40px;
  color: #000;
}

.tabbar li.router-link-active {
  background: red;
  color: #fff;
}

</style>