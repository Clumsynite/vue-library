<template>
  <div id="shelf">
    <transition-group
      name="slide-in"
      enter-active-class="animate__animated animate__slideInDown"
      id="grid"
    >
      <div id="book" v-for="book in library" :key="book.title">
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
          {{ book.read }}
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { readFromStorage } from "../crud/read";

export default {
  name: "Shelf",
  data: function() {
    return {
      library: readFromStorage()
    };
  },
  methods: {}
};
</script>

<style scoped>
#shelf {
  margin: 20px 10px;
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
  box-shadow: 0 4px 8px 0 grey;
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
