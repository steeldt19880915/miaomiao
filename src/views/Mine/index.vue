<template>
  <div>
    <HeaderComponent title="我的喵喵" />
    <div>mine</div>
    <TabberComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header'
import TabberComponent from '@/components/Tabbar'
export default {
  name: 'Mine',
  components: {
    HeaderComponent,
    TabberComponent
  }
}
</script>

<style>

</style>