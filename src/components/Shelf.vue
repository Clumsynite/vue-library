<template>
  <div id="shelf">
    <transition-group
      name="slide-in"
      enter-active-class="animate__animated animate__flipInY"
      leave-active-class="animate__animated animate__fadeOutDownBig"
      id="grid"
    >
      <div class="book" v-for="(book, index) in library" :key="book.title">
        <div class="top-div">
          <div class="title">
            {{ book.title }}
          </div>
          <div class="cancel-div">
            <button v-on:click="onDelete" class="cancel-btn">
              <i class="material-icons delete-btn" :data-index="index"
                >delete</i
              >
            </button>
          </div>
        </div>
        <div class="author">By {{ book.author }}</div>
        <div class="pages">{{ book.pages }} Pages</div>
        <div class="read" v-on:click="onToggle" :data-index="index">
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
import { toggleRead } from "../crud/update";
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
    },
    onToggle: function(e) {
      const elem = e.target;
      const index = elem.getAttribute("data-index");
      toggleRead(index);
      this.library = readFromStorage();
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
  grid-template-columns: repeat(6, 1fr);
  column-gap: 10px;
  row-gap: 15px;
}
.book {
  max-width: 200px;
  min-height: 170px;
  padding: 5px;
  background-color: white;
  box-shadow: 2px 2px 2px 1px grey;
  text-align: center;
}
.top-div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid black;
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
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
}
.title {
  max-width: 80%;
  overflow-y: auto;
  font-weight: bold;
  font-size: 18px;
}
.author {
  font-style: italic;
  overflow-y: auto;
  width: 100%;
}
.author,
.pages,
.read {
  padding: 8px 0;
}
.read {
  user-select: none;
}

@media screen and (max-width: 1100px) {
  #grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
@media screen and (max-width: 950px) {
  #grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media screen and (max-width: 800px) {
  #grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 650px) {
  #grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 440px) {
  #grid {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 2vw;
  }
  .book {
    max-width: 90vw;
  }
}

@media screen and (hover: hover) {
  .book:hover {
    box-shadow: 2px 2px 2px 1px black;
  }
  .cancel-btn:hover {
    color: red;
    background-position: left bottom;
  }
  .read:hover {
    cursor: pointer;
    color: blue;
  }
}
</style>
