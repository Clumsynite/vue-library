<template>
  <div id="shelf">
    <transition-group
      name="slide-in"
      enter-active-class="animate__animated animate__flipInY"
      leave-active-class="animate__animated animate__fadeOutDownBig"
      id="grid"
    >
      <div
        class="book"
        v-for="book in library"
        :key="book.title"
        @mouseover="mouseOver"
      >
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
    mouseOver: function() {}
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

<style scoped>
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
  /* min-width: 120px; */
  min-height: 120px;
  padding: 5px;
  background-color: white;
  box-shadow: 2px 2px 2px 1px grey;
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
/* @media screen and (max-width: 460px) {
  #grid {
    margin: 2vw;
    grid-template-columns: repeat(1, 1fr);
  } 
} */
</style>
