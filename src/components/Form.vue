<template>
  <form id="new-form" v-if="adding">
    <div id="cancel-div">
      <button>X</button>
    </div>
    <div id="get-title">
      <label>Book Name:</label>
      <input type="text" name="title" />
    </div>
    <div id="get-author">
      <label>Author's Name:</label>
      <input type="text" name="author" />
    </div>
    <div id="get-pages">
      <label>Number of Pages:</label>
      <input type="number" name="pages" />
    </div>
    <div id="get-read">
      <label>Have you read it?:</label>
      <input type="checkbox" name="read" />
    </div>
    <div id="accept">
      <button>Add Book</button>
    </div>
  </form>
</template>

<script>
import { serverBus } from "../main";
export default {
  name: "Form",
  data() {
    return {
      adding: false
    };
  },
  created() {
    serverBus.$on("adding", value => {
      this.adding = value;
    });
  }
};
</script>

<style scoped></style>
