<template>
  <div>
    <h1>System Data</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    var editorExtensionId = "hoifjojbknclnedfbedhgflejdobdbij";

    // Make a simple request:
    chrome.runtime.sendMessage(
      editorExtensionId,
      { greeting: "Hi there" },
      function(response) {
        //if (!response.success) console.log("Fail");
        console.log(response);
      }
    );
  },
};
</script>

<style scoped></style>
