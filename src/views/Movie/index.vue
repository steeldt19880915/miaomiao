<template>
  <div class="main">
    <HeaderComponent title="喵喵电影" />
    <div class="content_title">
      <div class="menu">
        <router-link tag="span" to="/movie/city" class="city">城市</router-link>
        <div class="menu_tabs">
          <router-link tag="div" to="/movie/nowPlaying" class="hot_item">正在热映</router-link>
          <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
        </div>
        <router-link tag="span" to="/movie/search" class="search">搜索</router-link>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>

    <TabbarComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header'
import TabbarComponent from '@/components/Tabbar'
export default {
  name: 'Movie',
  components: {
    HeaderComponent,
    TabbarComponent
  }

}
</script>

<style>
.menu {
  display: flex;
  justify-content: center;
  justify-items: center;
  background: yellow;
  height: 50px;
  line-height: 50px;
}
.menu_tabs {
   flex:1;
   display:flex;
   justify-content: center;
}

.hot_item {
  padding: 0 5px;
}

.hot_item.router-link-active {
  color: red;
  border-bottom: 2px solid red;
}

</style>