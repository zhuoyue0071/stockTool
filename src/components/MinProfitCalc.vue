<template>
  <div>
    <div style="width: 600px; margin: 0 auto">
      <h2 class="currentPrice">当前价格：{{currentPrice}}</h2>
      <div class="operationBox">
        <div>
          请输入<b>成本</b>价格：<input class="costPrice" type="text" />
        </div>
        <div style="margin-top: 20px">
          请输入<b>当前</b>价格：<input class="curPrice" type="text" />
        </div>
        <div style="margin-top: 20px">
          请输入<b>止损比率</b>：<input class="minProfitRatio" type="text" />
        </div>
        <el-button
          class="singlePriceCalc"
          style="margin: 20px"
          type="primary"
          size="mini"
          >计算止损价格</el-button
        >
        <div>
          <el-button class="realTimePriceCalc" type="primary" size="mini"
            >计算变化止损价格</el-button
          >
          <el-button class="stopBtn" type="danger" size="mini">停止</el-button>
        </div>
      </div>
      <div class="checkOutBox" style="font-size: 24px"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MinProfitCalc",
  data() {
    return {
      currentPrice: 0,
    };
  },
  methods: {
    sellPrice(cost, availableDiff = 0.3, currentPrice) {
      let tempProfit = currentPrice - cost;
      let minFloatProfit = tempProfit * (1 - availableDiff);
      let sellOutPrice = currentPrice - tempProfit * availableDiff;
      return `<p> 现在的利差为：<span style="color:red;">￥${tempProfit}</span>， </p>
      <p>现在的股价为：<span style="color:red;">￥${currentPrice}</span>， </p>
      <p>可接受最小的回撤利差为：<span style="color:red;">￥${minFloatProfit}</span>， </p>
      <p>清仓卖出价格为：<span style="color:red;">￥${sellOutPrice}</span>， </p>
      `;
    },

    priceChange(currentPrice, timeSlot) {
      let timer = null;
      setInterval(() => {}, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.operationBox {
  padding: 10px;
}
</style>
