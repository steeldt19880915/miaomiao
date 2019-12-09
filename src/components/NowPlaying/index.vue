<template>
  <div>
    <ul class="now-playing">
      <li>
        <h5>五名鼠辈</h5>
        <div class="btn_pre xhot">正在热映</div>
      </li>
      <li>
        <h5>毒液：致命守护者</h5>
        <div class="btn_pre xhot">正在热映</div>
      </li>
      <li>
        <h5>哥斯拉</h5>
        <div class="btn_pre xhot">正在热映</div>
      </li>
      <li>
        <h5>从前从前</h5>
        <div class="btn_pre xhot">正在热映</div>
      </li>
      <li>
        <h5>小时代</h5>
        <div class="btn_pre xhot">正在热映</div>
      </li>
      <li>
        <h5>三国演义</h5>
        <div class="btn_pre xhot">正在热映</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NowPlaying'
}
</script>

<style>
h5 {
  padding: 0;
  margin: 0;
}
.now-playing {
  margin-bottom: 50px;
}
.now-playing li {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  line-height: 30px;
  margin-top: 15px;
}
.btn_pre.xhot {
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: red;
  border-radius: 8px;
  color: #fff;
}
</style>