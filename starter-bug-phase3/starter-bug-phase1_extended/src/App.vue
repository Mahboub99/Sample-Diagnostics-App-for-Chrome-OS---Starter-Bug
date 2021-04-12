<template>
  <div id="app">
    <header class="Nav">
      <nav class="Links">
        <router-link to="/">System Data</router-link>
        <router-link to="/SystemManager"
          >System Digonistics Manager</router-link
        >
        <router-link to="/SystemState">System State</router-link>
      </nav>

      <img class="logo" src="./assets/logo.png" />
    </header>

    <router-view />
  </div>
</template>

<script>
import SystemData from "./views/SystemData.vue";
import SystemManager from "./views/SystemManager.vue";
import SystemState from "./views/SystemState.vue";

export default {
  components: {
    SystemData,
    SystemManager,
    SystemState,
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.Nav {
  padding: 10px 0 15px 25px;
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.Links {
  padding-top: 10px;
  text-align: left;
}

.logo {
  margin-left: auto;
  margin-right: 60px;
  width: 45px;
}

a {
  text-decoration: none;
  color: #ffffff;
  font-size: 15px;
  padding: 5px 0 5px 0;
  margin-right: 40px;
}
a:hover {
  transform: scale(1.1);
  transition-duration: 0.5s;
  color: #a3f7bf;
}
.router-link-exact-active {
  color: #a3f7bf;
}
@media (max-width: 700px) {
  a {
    display: block;
  }
}
</style>
