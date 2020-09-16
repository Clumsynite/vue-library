<template>
  <div id="new-form" class="book">
    <div class="top-div">
      <div class="get-title">
        <input
          type="text"
          name="title"
          placeholder="Book Name "
          v-model="title"
          class="input-title"
        />
      </div>
      <div class="cancel-div">
        <button v-on:click="hideForm" class="cancel-btn">
          <i class="material-icons">delete</i>
        </button>
      </div>
    </div>
    <div class="get-author">
      <input
        type="text"
        name="author"
        placeholder="Author's Name"
        v-model="author"
        class="input-author"
      />
    </div>
    <div class="get-pages">
      <input
        type="number"
        name="pages"
        placeholder="Number of Pages"
        v-model.number="pages"
        class="input-pages"
      />
    </div>
    <div class="get-read">
      <label>Have you read it?</label>
      <input type="checkbox" name="read" v-model="read" class="input-read" />
    </div>
    <div id="accept-div">
      <button v-on:click="onClick" class="accept-btn">Add Book</button>
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

<style scoped>
.input-title {
  width: 100%;
}
.get-author {
  padding: 5px 0;
}
.get-read {
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
}
.input-read {
  width: 16px;
  height: 16px;
}
.accept-btn {
  background-color: aliceblue;
  color: #111;
  border: 1px solid black;
  outline: none;
  padding: 5px;
  width: 100%;
  background: linear-gradient(to right, black 50%, white 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
}
input[type="text"],
input[type="number"] {
  padding: 4px;
}

@media screen and (hover: hover) {
  .accept-btn:hover {
    background-position: left bottom;
    color: white;
    cursor: pointer;
  }
}
</style>
