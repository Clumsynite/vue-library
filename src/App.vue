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
/* Materialize Icons */
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
/* Poppins - Font */
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
* {
  box-sizing: border-box;
}

body {
  background-color: #eee;
}

#app {
  font-family: "Poppins", sans-serif;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: black;
}
</style>
