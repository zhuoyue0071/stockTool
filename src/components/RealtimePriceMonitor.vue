<template>
  <div class="price-monitor-container">
    <el-card style="width: 700px" class="showBox" shadow="hover">
      <h2 class="costPrice">当前成本：{{ costPrice }}</h2>
      <h2 class="currentPrice">当前股价：{{ currentPrice }}</h2>
      <h2 class="availableDiff">
        最大回撤比率：{{
          availableDiff === "" ? "无记录" : availableDiff + "%"
        }}
      </h2>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "RealtimePriceMonitor",
  props: {
    costPrice: {
      type: Number,
      defalut: 0,
    },
    currentPrice: {
      type: Number,
      defalut: 0,
    },
    availableDiff: {
      type: Number,
      defalut: 0,
    },
  },
};
</script>

<style></style>
