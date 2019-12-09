<template>
  <div>
    <ul class="coming-soon">
      <li>
        <h5>大时代</h5>
        <div class="btn_pre xpresell">预售</div>
      </li>
      <li>
        <h5>猪无能</h5>
        <div class="btn_pre xpresell">预售</div>
      </li>
      <li>
        <h5>神将</h5>
        <div class="btn_pre xpresell">预售</div>
      </li>
      <li>
        <h5>仙女虾饭</h5>
        <div class="btn_pre xpresell">预售</div>
      </li>
      <li>
        <h5>无聊之至</h5>
        <div class="btn_pre xpresell">预售</div>
      </li>
      <li>
        <h5>五名鼠辈</h5>
        <div class="btn_pre xpresell">预售</div>
      </li>
      <li>
        <h5>毒液：致命守护者</h5>
        <div class="btn_pre xpresell">预售</div>
      </li>
      <li>
        <h5>哥斯拉</h5>
        <div class="btn_pre xpresell">预售</div>
      </li>
      <li>
        <h5>从前从前</h5>
        <div class="btn_pre xpresell">预售</div>
      </li>
      <li>
        <h5>小时代</h5>
        <div class="btn_pre xpresell">预售</div>
      </li>
      <li>
        <h5>三国演义</h5>
        <div class="btn_pre xpresell">预售</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon'

}
</script>

<style>
h5 {
  padding: 0;
  margin: 0;
}

.coming-soon {
  margin-bottom: 50px;
}
.coming-soon li {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 120px;
  line-height: 30px;
  margin-top: 15px;
}
.btn_pre.xpresell {
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: red;
  border-radius: 8px;
  color: #fff;
}
</style>