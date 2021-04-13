<template>
  <div class="CPU_Card">
    <h1 class="centerTitle">CPU</h1>
    <div class="el">
      <span class="metaData"> Arch Name : </span>
      <p>{{ info.archName }}</p>
    </div>
    <div class="el">
      <span class="metaData"> Number Of Processors : </span>
      <p>{{ info.numOfProcessors }}</p>
    </div>

    <div class="el">
      <span class="metaData"> Model Name : </span>
      <p>{{ info.modelName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  props: {
    info: {},
  },
};
</script>

<style scoped>
.CPU_Card {
  padding: 20px;
  width: 500px;
  background-color: #f6dfeb;
  border-radius: 28px;
  text-align: left;
  color: #000;
  margin-bottom: 40px;
}
.metaData {
  font-weight: 700;
  color: #693c72;
}
.centerTitle {
  text-align: center;
}
p {
  display: inline;
}
.el {
  margin-top: 20px;
}
</style>
