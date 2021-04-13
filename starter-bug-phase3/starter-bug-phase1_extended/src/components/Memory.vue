<template>
  <div class="memory_Card">
    <h1 class="centerTitle">Memory (RAM)</h1>
    <div class="el">
      <span class="metaData"> Available Capacity : </span>
      <p>{{ info.availableCapacity }}</p>
    </div>
    <div class="el">
      <span class="metaData">Total Capacity: </span>
      <p>{{ info.capacity }}</p>
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
.memory_Card {
  padding: 20px;
  width: 500px;
  background-color: #fed049;
  border-radius: 28px;
  text-align: left;
  color: #000;
}
.metaData {
  font-weight: 700;
  color: #966c3b;
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
