<template>
  <div class="search">
    <input type="text" placeholder="请输入电影" v-model="input">
    <div class="search_menu">
      <div class="search_title">电影/电视剧/综艺</div>
      <div class="search_item">
        <div class="search_left">无名之辈</div>
        <div class="search_right">8.5</div>
      </div>
      <div class="search_item">
        <div class="search_left">无名之辈</div>
        <div class="search_right">8.5</div>
      </div>
      <div class="search_item">
        <div class="search_left">无名之辈</div>
        <div class="search_right">8.5</div>
      </div>
      <div class="search_item">
        <div class="search_left">无名之辈</div>
        <div class="search_right">8.5</div>
      </div>
      <div class="search_item">
        <div class="search_left">无名之辈</div>
        <div class="search_right">8.5</div>
      </div>
      <div class="search_item">
        <div class="search_left">无名之辈</div>
        <div class="search_right">8.5</div>
      </div>
      <div class="search_item">
        <div class="search_left">无名之辈</div>
        <div class="search_right">8.5</div>
      </div>
      <div class="search_item">
        <div class="search_left">无名之辈</div>
        <div class="search_right">8.5</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data: function () {
    return {
      input: ''
    }
  }
}
</script>

<style>
.search {
  /* padding: 0 20px; */
  margin-bottom: 50px;
}
.search > input {
  width: 100%;
  height: 35px;
  margin: 20px 0;
  border: none;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
}

.search_item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  line-height: 120px;
}
</style>