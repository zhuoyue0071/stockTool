<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <MinProfitCalc/>
  </div>
</template>

<script>
import MinProfitCalc from "./components/MinProfitCalc.vue";

export default {
  name: "App",
  components: {
    MinProfitCalc,
  },
};
</script>
