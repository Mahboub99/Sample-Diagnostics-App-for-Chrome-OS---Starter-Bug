<template>
  <div>
    <h1>System Data</h1>
  </div>
</template>

<script>
// Make a simple request:

export default {
  data() {
    return {};
  },

  methods: {},
  mounted() {
    var editorExtensionId = "hoifjojbknclnedfbedhgflejdobdbij";

    chrome.runtime.sendMessage(
      editorExtensionId,
      { openUrlInEditor: url },
      function(response) {
        if (!response.success) handleError(url);
        console.log(response);
      }
    );
  },
};
</script>

<style scoped></style>
