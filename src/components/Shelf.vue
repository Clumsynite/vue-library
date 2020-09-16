<template>
  <div id="shelf">
    <transition-group
      name="slide-in"
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutDownBig"
      id="grid"
    >
      <div
        id="book"
        v-for="book in library"
        :key="book.title"
        @mouseover="mouseOver"
      >
        <div id="title">
          {{ book.title }}
        </div>
        <div id="author">
          {{ book.author }}
        </div>
        <div id="pages">
          {{ book.pages }}
        </div>
        <div id="read">
          {{ book.read ? "You've read this already" : "Haven't read this" }}
        </div>
      </div>
      <Form :key="'book-form'" />
    </transition-group>
  </div>
</template>

<script>
import { readFromStorage } from "../crud/read";
import Form from "./Form.vue";

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
#book {
  padding: 5px;
  background-color: white;
  box-shadow: 2px 2px 2px 1px grey;
  height: 140px;
}

@media screen and (max-width: 600px) {
  #grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (max-width: 420px) {
  #grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 360px) {
  #grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
