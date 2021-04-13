<template>
  <div>
    <h1>System Data</h1>
    <div class="info-container">
      <div>
        <CPU :info="cpu"></CPU>
        <Memory :info="memory"></Memory>
      </div>
      <Storage :info="storage"></Storage>
    </div>
  </div>
</template>

<script>
import CPU from "../components/CPU";
import Memory from "../components/Memory";
import Storage from "../components/Storage";

export default {
  data() {
    return {
      cpu: {},
      memory: {},
      storage: [],
    };
  },
  methods: {
    fetcData() {
      return new Promise((resolve, reject) => {
        var editorExtensionId = "hoifjojbknclnedfbedhgflejdobdbij";
        chrome.runtime.sendMessage(
          editorExtensionId,
          { greeting: "Hi there" },
          function(response) {
            //if (!response.success) console.log("Fail");
            console.log(response);
            resolve(response);
          }
        );
      });
    },
    async updateData() {
      const data = await this.fetcData();
      console.log(data);
      this.cpu = data[0];
      this.memory = data[1];
      this.storage = data[2];
    },
  },

  mounted() {
    this.updateData();
  },
  components: {
    CPU,
    Memory,
    Storage,
  },
};
</script>

<style scoped>
.info-container {
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin: auto;
  padding-top: 75px;
  padding-bottom: 40px;
  justify-items: center;
}
@media screen and (max-width: 700px) {
  .info-container {
    grid-template-columns: 1fr;
  }
}
</style>
