<template>
  <div id="new-form" class="book">
    <div class="cancel-div">
      <button v-on:click="hideForm" class="cancel-btn">
        <i class="material-icons">delete</i>
      </button>
    </div>
    <div id="get-title">
      <input
        type="text"
        name="title"
        placeholder="Book Name "
        v-model="title"
      />
    </div>
    <div id="get-author">
      <input
        type="text"
        name="author"
        placeholder="Author's Name"
        v-model="author"
      />
    </div>
    <div id="get-pages">
      <input
        type="number"
        name="pages"
        placeholder="Number of Pages"
        v-model.number="pages"
      />
    </div>
    <div id="get-read">
      <label>Have you read it?:</label>
      <input type="checkbox" name="read" v-model="read" />
    </div>
    <div id="accept">
      <button v-on:click="onClick">Add Book</button>
    </div>
  </div>
</template>

<script>
import { serverBus } from "../main";
import { addNewBook } from "../crud/write";
import { newBook } from "../crud/object";
export default {
  name: "Form",
  data() {
    return {
      title: "",
      author: "",
      pages: "",
      read: ""
    };
  },
  methods: {
    onClick: function() {
      if (this.validateForm()) {
        const book = newBook(this.title, this.author, this.pages, this.read);
        addNewBook(book);
        this.hideForm();
      } else {
        alert("You might have missed a field");
      }
    },
    hideForm() {
      serverBus.$emit("added", true);
    },
    validateForm() {
      const title = this.title;
      const author = this.author;
      const page = this.pages;

      if (
        this.checkNotNull(title) &&
        this.checkNotNull(author) &&
        this.checkNotNull(page)
      ) {
        return true;
      }
      return false;
    },
    checkNotNull(data) {
      return data.length === 0 ? false : true;
    }
  }
};
</script>

<style scoped></style>
