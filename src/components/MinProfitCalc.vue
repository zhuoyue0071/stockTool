<template>
  <div>
    <div style="margin: 0 auto">
      <el-space direction="vertical">
        <el-card style="width: 700px" class="checkOutBox" shadow="hover">
          <el-descriptions
            class="margin-top"
            title="操作指标"
            :column="1"
            size="mini"
            width="600px"
            border
          >
            <template #extra>
              <el-button type="primary" size="small">操作</el-button>
            </template>
            qq
            <el-descriptions-item width="120px">
              <template #label>
                <i class="el-icon-user"></i>
                现在的利差为：
              </template>
              {{ tempProfit }}
            </el-descriptions-item>
            <el-descriptions-item width="120px">
              <template #label>
                <i class="el-icon-mobile-phone"></i>
                现在的股价为：
              </template>
              {{ currentPrice }}
            </el-descriptions-item>
            <el-descriptions-item width="120px">
              <template #label>
                <i class="el-icon-location-outline"></i>
                可接受最小的回撤利差为：
              </template>
              {{ minFloatProfit }}
            </el-descriptions-item>
            <el-descriptions-item width="120px">
              <template #label>
                <i class="el-icon-office-building"></i>
                清仓卖出价格为：
              </template>
              {{ sellOutPrice }}
            </el-descriptions-item>
          </el-descriptions>
        </el-card>
        <RealtimePriceMonitor :costPrice="costPrice" :currentPrice="currentPrice" :availableDiff="availableDiff" />
        <el-card style="width: 700px" class="operationBox" shadow="hover">
          <div class="inputBox costPrice">
            <p>请输入<b>成本</b>价格：</p>
            <el-input
              v-model="costPrice"
              style="width: 200px"
              size="small"
              type="text"
            />
          </div>
          <div class="inputBox currentPrice">
            <p>请输入<b>当前</b>价格：</p>
            <el-input
              v-model="currentPrice"
              style="width: 200px"
              size="small"
              type="text"
            />
          </div>
          <div class="inputBox availableDiff">
            <p>请输入<b>最大回撤比率</b>：</p>
            <el-input
              v-model.number="availableDiff"
              style="width: 100px"
              size="small"
              type="text"
              @input="checkRatioInput"
            />
            %
          </div>
          <div class="buttonGroup">
            <el-button
              class="singlePriceCalc"
              style="margin: 20px"
              type="success"
              size="mini"
              @click="singlePriceCalc"
              >计算止损价格</el-button
            >
            <el-divider direction="vertical"></el-divider>
            {{ accumulatePrice }}
            <el-button
              class="realTimePriceCalc"
              type="primary"
              size="mini"
              @click="realTimePriceCalc"
              >计算变化止损价格</el-button
            >
            <el-button
              class="stopBtn"
              type="danger"
              size="mini"
              @click="stopBtn"
              >停止</el-button
            >
          </div>
        </el-card>
      </el-space>
    </div>
  </div>
</template>

<script>
import getPosAndNegNum from "/@/utils/mathUtils";
import RealtimePriceMonitor from "/@/components/RealtimePriceMonitor.vue";
export default {
  name: "MinProfitCalc",
  components: {
    RealtimePriceMonitor,
  },
  data() {
    return {
      currentPrice: 17.89, //目前价格
      costPrice: 16.64, //成本
      tempProfit: 0, //目前利润
      availableDiff: 30, //最大回撤
      minFloatProfit: 0, //最小浮动利润
      sellOutPrice: 0, //止损价格
      result: "", //结果
      accumulatePrice: 17.9,
    };
  },
  methods: {
    checkRatioInput(v) {
      if (v > 99 || v < 1 || isNaN(v)) this.availableDiff = "";
      this.availableDiff = v * 1;
    },
    singlePriceCalc() {
      this.sellPrice(this.costPrice, this.availableDiff, this.currentPrice);
    },
    realTimePriceCalc() {
      this.priceChange(1000);
    },
    stopBtn() {},
    sellPrice(costPrice, availableDiff = 0.3, currentPrice) {
      this.tempProfit = (currentPrice - costPrice).toFixed(2);
      this.minFloatProfit = this.tempProfit * (1 - availableDiff / 100);
      this.sellOutPrice =
        currentPrice - (this.tempProfit * availableDiff) / 100;
    },

    priceChange(timeSlot) {
      // this.currentPrice += getPosAndNegNum(10)
      this.accumulatePrice = getPosAndNegNum(this.accumulatePrice);
      // console.log(getPosAndNegNum(currentPrice));
      return;
      let timer = null;
      setInterval(() => {
        // this.currentPrice = currentPrice += Math.random() > 0.5 ?;
      }, timeSlot);
    },
  },
};
</script>

<style lang="scss" scoped>
.operationBox {
  box-sizing: border-box;
  padding: 10px;
  .inputBox {
    display: flex;
    justify-content: center;
    align-items: center;
    b {
      color: red;
    }
  }
}
</style>
