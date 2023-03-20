/* eslint-disable */
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <FormLlamada />
  </div>
</template>

<script>
import FormLlamada from "./components/FormLlamada.vue";

export default {
  name: "App",
  components: {
    FormLlamada,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
