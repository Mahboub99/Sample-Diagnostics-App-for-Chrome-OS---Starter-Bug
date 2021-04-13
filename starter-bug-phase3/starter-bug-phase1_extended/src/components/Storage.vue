<template>
  <div class="Storage_Card">
    <h1 class="centerTitle">Storage(ROM)</h1>
    <div v-for="el in info" :key="el.id" class="Partation">
      <h3>
        Partation ({{
          el.name.replace(/[^0-9a-z-A-Z ]/g, "").replace(/ +/, " ")
        }}
        )
      </h3>
      <div class="el">
        <span class="metaData"> capacity : </span>
        <p>{{ el.capacity }}</p>
      </div>
      <div class="el">
        <span class="metaData"> ID : </span>
        <p>{{ el.id }}</p>
      </div>

      <div class="el">
        <span class="metaData"> Name : </span>
        <p>{{ el.name.replace(/[^0-9a-z-A-Z ]/g, "").replace(/ +/, " ") }}</p>
      </div>

      <div class="el">
        <span class="metaData"> type : </span>
        <p>{{ el.type }}</p>
      </div>
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
.Storage_Card {
  padding: 20px;
  width: 80%;
  background-color: #98ddca;
  border-radius: 28px;
  text-align: left;
  color: #000;
}
.metaData {
  font-weight: 700;
  color: #206a5d;
}
.centerTitle {
  text-align: center;
}
.Partation {
  padding: 10px 20px;
}
p {
  display: inline;
}
.el {
  margin-top: 10px;
}
</style>
