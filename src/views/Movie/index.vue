<template>
  <div class="main">
    <HeaderComponent title="喵喵电影" />
    <div>movie</div>
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

</style>