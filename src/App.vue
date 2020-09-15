<template>
  <div id="app">
    <Navbar />
    <Shelf />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Shelf from "./components/Shelf.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Shelf
  }
};
</script>

<style>
/* Animate.css - Animations Library */
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css");
/* Poppins - Font */
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

body {
  background-color: #eee;
}

#app {
  font-family: "Poppins", sans-serif;
}
</style>
