<template>
  <div id="shelf">
    <transition-group
      name="slide-in"
      enter-active-class="animate__animated animate__flipInY"
      leave-active-class="animate__animated animate__fadeOutDownBig"
      id="grid"
    >
      <div class="book" v-for="(book, index) in library" :key="book.title">
        <div class="cancel-div">
          <button v-on:click="onDelete" :data-index="index" class="cancel-btn">
            <i class="material-icons">delete</i>
          </button>
        </div>
        <div class="title">
          {{ book.title }}
        </div>
        <div class="author">Written by {{ book.author }}</div>
        <div class="pages">Pages: {{ book.pages }}</div>
        <div class="read">
          {{ book.read ? "I've read this already" : "Will read this later" }}
        </div>
      </div>
      <Form :key="'book-form'" v-if="adding" />
    </transition-group>
  </div>
</template>

<script>
import { readFromStorage } from "../crud/read";
import { deleteBook } from "../crud/delete";
import Form from "./Form.vue";

import { serverBus } from "../main";
export default {
  name: "Shelf",
  components: {
    Form
  },
  data: function() {
    return {
      library: readFromStorage(),
      adding: false
    };
  },
  methods: {
    onDelete: function(e) {
      const elem = e.target;
      const index = elem.getAttribute("data-index");
      const agree = confirm("Are you sure you want to delete this book?");
      if (agree) {
        deleteBook(index);
        this.library = readFromStorage();
      } else {
        return agree;
      }
    }
  },
  created() {
    serverBus.$on("adding", value => {
      this.adding = value;
    });
    serverBus.$on("added", value => {
      this.adding = !value;
      if (value) {
        this.library = readFromStorage();
      }
    });
  }
};
</script>

<style>
#shelf {
  margin: 20px 0;
}
#grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 10px;
  row-gap: 10px;
}
.book {
  max-width: 200px;
  min-height: 120px;
  padding: 5px;
  background-color: white;
  box-shadow: 2px 2px 2px 1px grey;
}
.book:hover {
  box-shadow: 2px 2px 2px 1px black;
}
.cancel-div {
  display: block;
  text-align: right;
  padding: 0;
}
.cancel-btn {
  border: none;
  background-color: white;
  color: black;
  font-weight: bold;
  padding: 0px;
  cursor: pointer;
  outline: none;
}
.cancel-btn:hover {
  color: red;
}
.title {
  overflow-y: auto;
}

@media screen and (max-width: 1100px) {
  #grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media screen and (max-width: 880px) {
  #grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 680px) {
  #grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
